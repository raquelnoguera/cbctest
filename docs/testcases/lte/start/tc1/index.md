---
lang: en-GB
title: LTE TC START-1
description: Alert in local language without indication.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#start-alert'
- text: 'START-1'
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

# **START-1** Alert in local language. Area within a single TA. No indication.

## Description

Cell broadcast of an alert in local language in an area covered by cells within
the same TA.

## Pre-requisites

* Define an alert area within the coverage of a single TA.
* There is no ongoing cell broadcast in any of the cells that cover the alert area.
* The message is in the local language.
* Alert timing defined so it is easy to verify that the value of the parameters
  *Number of broadcast* and *broadcast period* that the CBC sends to the MME. 

## Steps to execute

1. CBE sends CAP Alert message with:
   - A single *info* element. I.e. only one message in one language.
   - *alertinfo.language.code* set to the value of the local language (e.g. 
      sl-SI for Slovenian).
   - *alertinfo.instruction.text* content of the alert message in local 
      language.
   - Time information that allows the CBC to calculate the *repetition period*
     and the *number of repetitions*.
   - Alert area that is inside the area controlled by a single MME. I.e.
     only one MME is involved in this test.

## Information flow

<div style="text-align: center;">

![tc_lte_start_1](/assets/img/flows/lte/start/tc_lte_start_1.svg)

</div>

## Result

Verify that:

1. The CBC selects all the cells that meet the configured selection criteria 
   for the alert area in flow 1 *CAP Alert*.
2. The CBC sends a WRITE-REPLACE WARNING REQUEST only to the one MME 
   that controls the eNBs in charge of the cells in the list. Presence of 
   parameters in this message shall be as shown in the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/start/tc1/#iterations) |
   | **Serial Number** | Yes | |
   | **List of TAIs** | Should | TAI of the cells in IE **Warning Area List** |
   | **Warning Area List** | Yes | List of cells that cover the alert area |
   | **Repetition Period** | Yes | According to the timing requested in flow 1 |
   | **Extended Repetition Period** | No | |
   | **Number of Broadcast Requested** | Yes | According to the timing requested in flow 1 |
   | **Warning Type** | No | |
   | **Warning Security Information** | No | |
   | **Data Coding Scheme** | Yes | Set for local language according to 3GPP TS 23.038 |
   | **Warning Message Contents** | Yes | Alert message encoded according to the value of DCS above |
   | **Concurrent Warning Message Indicator** | Yes | true |
   | **Send Write-Replace-Warning-Indication** | No |
   | **Global eNB ID** | No |

3. The MME responds with a WRITE-REPLACE WARNING RESPONSE with contents 
   according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | No | |

4. Handsets in the alert area receive the alert and display it correctly.

## Iterations

This TC should be iterated for the alert types and message lengths in the 
following table that are applicable in the country in which the CBC is 
deployed:

| Iteration | Alert Type | Message identifier | Text length |
|:---:| ------------ |:------------------:|:---:|
| 1 | EU-Alert Level 1 \ WEA Presidential | 4370 (0x1112) | Short |
| 2 | EU-Alert Level 2 \ WEA Extreme | [4371, 4372] ([0x1113, 0x1114]) | Short |
| 3 | EU-Alert Level 3 \ WEA Severe | [4373 ... 4378] ([0x1115 ... 0x111A) | Short |
| 4 | EU-Alert & WEA AMBER | 4379 (0x111B) | Short |
| 5 | WEA RMT | 4380 (0x111C) | Short |
| 6 | WEA Exercise | 4381 (0x111D) | Short |
| 7 | WEA Operator defined use | 4382 (0x111E) | Short |
| 8 | EU-Alert Level 4 \ WEA Public Safety | 4396 (0x112C) | Short |
| 9 | WEA State/Local test | 4398 (0x112E) | Short |
| 10 | EU-Info | 6400 (0x1900) | Short |
| 11 | EU-Alert Level 1 \ WEA Presidential | 4370 (0x1112) | Long |
| 12 | EU-Alert Level 2 \ WEA Extreme | [4371, 4372] ([0x1113, 0x1114]) | Long |
| 13 | EU-Alert Level 3 \ WEA Severe | [4373 ... 4378] ([0x1115 ... 0x111A) | Long |
| 14 | EU-Alert & WEA AMBER | 4379 (0x111B) | Long |
| 15 | WEA RMT | 4380 (0x111C) | Long |
| 16 | WEA Exercise | 4381 (0x111D) | Long |
| 17 | WEA Operator defined use | 4382 (0x111E) | Long |
| 18 | EU-Alert Level 4 \ WEA Public Safety | 4396 (0x112C) | Long |
| 19 | WEA State/Local test | 4398 (0x112E) | Long |
| 20 | EU-Info | 6400 (0x1900) | Long |
| 21 | EU-Alert Level 1 \ WEA Presidential | 4370 (0x1112) | Very long |
| 22 | EU-Alert Level 2 \ WEA Extreme | [4371, 4372] ([0x1113, 0x1114]) | Very long |
| 23 | EU-Alert Level 3 \ WEA Severe | [4373 ... 4378] ([0x1115 ... 0x111A) | Very long |
| 24 | EU-Alert & WEA AMBER | 4379 (0x111B) | Very long |
| 25 | EU-Alert Level 4 \ WEA Public Safety | 4396 (0x112C) | Very long |
| 26 | EU-Info | 6400 (0x1900) | Very long |

A **short** message fits into one [page](/introduction.html#cell-broadcast-message). 
A **long** requires 4 pages and a **very long** one 15 pages.

::: warning Text Encoding
How many characters fit into one page depends on whether the message is 
encoded using GSM7 (1 char = 7 bits, 1 shifted char = 14 bits) or UCS2 (1 char
= 16 bits).

Select appropriate short / long / very long messages according to 
the encoding used for the local and additional languages that you are testing.
:::

WEA sets the limit to 4 pages. So we do not need to test very long messages for
WEA only types. If you are testing EU-Alert and your country sets a limit for 
the length of messages, you should test the long or very long cases using this
limit.