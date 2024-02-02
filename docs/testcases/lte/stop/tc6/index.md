---
lang: en-GB
title: LTE TC STOP-6
description: Completely stop, without indication, a continuous alert in additional language.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#stop-alert'
- text: 'STOP-6'
- text: 'Description'
  link: '#description'
- text: 'Pre-requisites'
  link: '#pre-requisites'
- text: 'Steps to execute'
  link: '#steps-to-execute'
- text: 'Information flow'
  link: '#information-flow'
- text: 'Result'
  link: '#result'
- text: 'Iterations'
  link: '#iterations'
---

# **STOP-6** Completely stop, without indication, a continuous alert in additional language.

## Description

Stop ongoing time-unlimited cell broadcast of an alert in a language different
to the local one. The alert area is covered by cells within a single TA.

## Pre-requisites

* Define an alert area within the coverage of a single TA.
* There is no ongoing cell broadcast in any of the cells that cover the alert area.
* The message is in language different to the local language.
* The Alert request indicates that this alert shall run indefinitely.

## Steps to execute

1. CBE sends CAP Alert message with:
   - A single *info* element. I.e. only one message in one language.
   - *alertinfo.language.code* set to the value of the additional language 
     (e.g. sl-SI for Slovenian).
   - *alertinfo.instruction.text* content of the alert message in the 
     language indicated by the code above.
   - *alertInfo.expires* is not present. This indicates that the alert shall 
     run indefinitely.
   - Alert area that is inside the area controlled by a single MME. I.e.
     only one MME is involved in this test.
2. Let the alert run for at least two repetition periods.
3. The CBE sends CAP Cancel message with:
   - The same *identifier* as in the CAP Alert message that started the 
     broadcast.
   - All other mandatory parameters.
   - If the *info* element is present, then its content must match the ongoing
     alert.

## Information flow

<div style="text-align: center;">

![tc1_lte_stop_6](/assets/img/flows/lte/stop/tc_lte_stop_6.svg)

</div>

## Result

Verify that:

1. The CBC sends a STOP WARNING REQUEST only to the one MME 
   that controls the eNBs that control the cells where the ongoing alert is 
   broadcasted. Presence of parameters in this message shall be as shown in the
   following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/stop/tc6/#iterations) |
   | **Serial Number** | Yes | Same as for ongoing broadcast |
   | **List of TAIs** | May | TAI of the cells in IE **Warning Area List** |
   | **Warning Area List** | May | List of cells that cover the alert area |
   | **Send Stop Warning Indication** | Yes | true |
   | **Stop All Indication** | No |  |

2. The MME responds with a STOP WARNING RESPONSE with contents according to the
   following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | No | |

3. Broadcast of the alert has stopped in all the cells in which it was active.

## Iterations

This TC should be iterated for the alert types in the following table that are 
applicable in the country in which the CBC is deployed:

| Iteration | Alert Type | Message identifier |
|:---:|------------|:------------------:|
| 1 | EU-Alert Level 1 \ WEA Presidential | 4383 (0x111F) |
| 2 | EU-Alert Level 2 \ WEA Extreme | [4384, 4385] ([0x1120, 0x1121]) |
| 3 | EU-Alert Level 3 \ WEA Severe | [4386 ... 4391] ([0x1122 ... 0x1127) |
| 4 | EU-Alert & WEA AMBER | 4392 (0x1128) |
| 5 | WEA RMT | 4393 (0x1129) |
| 6 | WEA Exercise | 4394 (0x112A) |
| 7 | WEA Operator defined use | 4395 (0x112B) |
| 8 | EU-Alert Level 4 \ WEA Public Safety | 4397 (0x112D) |
| 9 | WEA State/Local test | 4399 (0x112F) |
