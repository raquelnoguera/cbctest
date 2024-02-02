---
lang: en-GB
title: LTE TC STOP-7
description: Completely stop, with indication, a continuous alert in local language.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#stop-alert'
- text: 'STOP-7'
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

# **STOP-7** Completely stop, with indication, a continuous alert in local language.

## Description

Stop ongoing time-unlimited cell broadcast of an alert in local language in an
area covered by cells within a single TA.

## Pre-requisites

* Define an alert area within the coverage of a single TA.
* There is no ongoing cell broadcast in any of the cells that cover the alert area.
* The message is in the local language.
* The Alert request indicates that this alert shall run indefinitely.

## Steps to execute

1. CBE sends CAP Alert message with:
   - A single *info* element. I.e. only one message in one language.
   - *alertinfo.language.code* set to the value of the local language 
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

![tc1_lte_stop_7](/assets/img/flows/lte/stop/tc_lte_stop_7.svg)

</div>

## Result

Verify that:

1. The CBC sends a WRITE-REPLACE WARNING REQUEST only to the one MME that 
   controls the eNBs in charge of the cells that cover the alert area. Presence
   of parameters in this message shall be as shown in the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/stop/tc7/#iterations) |
   | **Serial Number** | Yes | |
   | **List of TAIs** | Should | TAI of the cells in IE **Warning Area List** |
   | **Warning Area List** | Yes | List of cells that cover the alert area |
   | **Repetition Period** | Yes | According to the timing requested in flow 1. |
   | **Extended Repetition Period** | No | |
   | **Number of Broadcast Requested** | Yes | 0 |
   | **Warning Type** | No | |
   | **Warning Security Information** | No | |
   | **Data Coding Scheme** | Yes | Set for local language according to 3GPP TS 23.038 |
   | **Warning Message Contents** | Yes | Alert message encoded according to the value of DCS above |
   | **Concurrent Warning Message Indicator** | Yes | true |
   | **Send Write-Replace-Warning-Indication** | Yes | true |
   | **Global eNB ID** | No |

2. The MME responds with a WRITE-REPLACE WARNING RESPONSE message with content
   according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | No | |

3. The CBC sends a STOP WARNING REQUEST only to the one MME that controls the 
   eNBs that control the cells where the ongoing alert is broadcasted. Presence
   of parameters in this message shall be as shown in the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/stop/tc7/#iterations) |
   | **Serial Number** | Yes | Same as for ongoing broadcast |
   | **List of TAIs** | May | TAI of the cells in IE **Warning Area List** |
   | **Warning Area List** | May | List of cells that cover the alert area |
   | **Send Stop Warning Indication** | Yes | true |
   | **Stop All Indication** | No |  |

4. The MME responds with a STOP WARNING RESPONSE with contents according to the
   following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 1 |
   | **Serial Number** | Yes | Same as in flow 1 |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | No | |

5. The MME sends one or more STOP WARNING INDICATION messages with content
   according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 1 |
   | **Serial Number** | Yes | Same as in flow 1 |
   | **Broadcast Cancelled Area List** | Yes | A list with cells listed in *Warning Area List* IE in WRWR that created the broadcast |
   | **Broadcast Empty Area List** | No | |

If only one STOP WARNING INDICATION is received, then the *Broadcast 
Cancelled Area List* shall contain all the cells in the *Warning Area List* IE 
received in the WRITE-REPLACE WARNING Request that created the broadcast. If 
more than one STOP WARNING INDICATION are received, then the union of all the 
*Broadcast Cancelled Area List* IEs received shall contain all the cells inside 
the *Warning Area List* IE received in the WRITE-REPLACE WARNING Request that 
created the broadcast.

4. Broadcast of the alert has stopped in all the cells in which it was active.

## Iterations

This TC should be iterated for the alert types in the following table that are 
applicable in the country in which the CBC is deployed:

| Iteration | Alert Type | Message identifier |
|:----:|------------|:------------------:|
| 1 | EU-Alert Level 1 \ WEA Presidential | 4370 (0x1112) |
| 2 | EU-Alert Level 2 \ WEA Extreme | [4371, 4372] ([0x1113, 0x1114]) |
| 3 | EU-Alert Level 3 \ WEA Severe | [4373 ... 4378] ([0x1115 ... 0x111A) |
| 4 | EU-Alert & WEA AMBER | 4379 (0x111B) |
| 5 | WEA RMT | 4380 (0x111C) |
| 6 | WEA Exercise | 4381 (0x111D) |
| 7 | WEA Operator defined use | 4382 (0x111E) |
| 8 | EU-Alert Level 4 \ WEA Public Safety | 4396 (0x112C) |
| 9 | WEA State/Local test | 4398 (0x112E) |
| 10 | EU-Info | 6400 (0x1900) | 
