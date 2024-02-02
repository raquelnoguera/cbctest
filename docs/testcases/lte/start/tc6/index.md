---
lang: en-GB
title: LTE TC START-6
description: Global Alert in local language with indication.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#start-alert'
- text: 'START-6'
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

# **START-6** Global Alert in local language. With indication.

## Description

Cell broadcast of an alert in the local language.<br>
The alert area extends the whole LTE coverage area of the MNO.<br>
The MMEs are requested to report updates for the alert.

## Pre-requisites

* If *indication* is not requested via the CBE - CBC interface, then configure 
  the CBC to request *indications* from the MMEs.
* The alert area extends the whole coverage area of the network.
* There is no ongoing cell broadcast in the network.
* The message is in the local language.
* Alert timing defined so it is easy to verify that the value of the parameters
  *Number of broadcast* and *broadcast period* that the CBC sends to the MMEs.

## Steps to execute

1. CBE sends CAP Alert message with:
   - A single *info* element. I.e. only one message in one language.
   - *alertinfo.language.code* set to the value of the local language (e.g. 
      sl-SI for Slovenian).
   - *alertinfo.instruction.text* content of the alert message in local 
      language. The message of this message should be such that it 
     needs four [pages](/introduction.html#cell-broadcast-message) when 
     encoded.
   - Time information that allows the CBC to calculate the *repetition period*
     and the *number of repetitions*.
   - Alert area is either no defined or defined to cover the whole region 
     covered by the whole LTE network under test.
   - If *indication* is requested via the CBE - CBC interface, then include the
     parameters for requesting *indication*.

## Information flow

<div style="text-align: center;">

![tc_lte_start_6](/assets/img/flows/lte/start/tc_lte_start_6.svg)

</div>

## Result

Verify that:

1. The CBC sends one WRITE-REPLACE WARNING REQUEST to each of the MMEs to which
   it is connected. Presence of parameters in this message shall be as shown in
   the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/start/tc6/#iterations) |
   | **Serial Number** | Yes |  |
   | **List of TAIs** | No |  |
   | **Warning Area List** | No |  |
   | **Repetition Period** | Yes | According to the timing requested in flow 1. |
   | **Extended Repetition Period** | No | |
   | **Number of Broadcast Requested** | Yes | According to the timing requested in flow 1. |
   | **Warning Type** | No | |
   | **Warning Security Information** | No | |
   | **Data Coding Scheme** | Yes | Set for local language according to 3GPP TS 23.038 |
   | **Warning Message Contents** | Yes | Alert message encoded according to the value of DCS above |
   | **Concurrent Warning Message Indicator** | Yes | true |
   | **Send Write-Replace-Warning-Indication** | Yes | true |
   | **Global eNB ID** | No |

2. Each MME responds with a WRITE-REPLACE WARNING RESPONSE message with content
   according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | No | |

3. Each MME sends one or more WRITE-REPLACE WARNING INDICATION messages with 
content according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Broadcast Scheduled Area List** | Yes | List of cells for which broadcast is active |
   | **Broadcast Empty Area List** | May | List of cells for which broadcast failed |

4. Broadcast is active in all the eNBs.
5. Report outcome to the CBE, if the CBE-CBC interface supports it.
6. Handsets in the alert area receive and display it correctly.

## Iterations

This TC should be executed for the alert types in the following table that are 
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
