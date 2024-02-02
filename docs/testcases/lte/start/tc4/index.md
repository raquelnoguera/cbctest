---
lang: en-GB
title: LTE TC START-4
description: Alert in additional language with indication.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#start-alert'
- text: 'START-4'
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

# **START-4** Alert in additional language. Area within a single TA. With indication.

## Description

Cell broadcast of an alert in additional language in an area covered by cells 
within the same TA. The MME is requested to report updates regarding the alert.
The alert is broadcasted successfully in all the cells.

## Pre-requisites

* If *indication* is not requested via the CBE - CBC interface, then configure 
  the CBC to request *indications* from the MMEs.
* Define an alert area within the coverage of a single TA.
* There is no ongoing cell broadcast in any of the cells that cover the alert 
  area.
* The message is in a language different to the local language.
* Alert timing defined so it is easy to verify that the value of the parameters
  *Number of broadcast* and *broadcast period* that the CBC sends to the MME.

## Steps to execute

1. CBE sends a CAP Alert message with:
   - A single *info* element. I.e. only one message in one language.
   - *alertinfo.language.code* set to the value of a language different to the
     local language (e.g. sl-SI for Slovenian).
   - *alertinfo.instruction.text* content of the alert message the language 
     corresponding to the code above.
   - Time information that allows the CBC to calculate the *repetition period*
     and the *number of repetitions*.
   - Alert area that is inside the area controlled by a single MME. I.e.
     only one MME is involved in this test.
   - If *indication* is requested via the CBE - CBC interface, then include the
     parameters for requesting *indication*.

## Information flow

<div style="text-align: center;">

![tc_lte_start_4](/assets/img/flows/lte/start/tc_lte_start_4.svg)

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
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/start/tc4/#iterations) |
   | **Serial Number** | Yes | |
   | **List of TAIs** | Should | TAI of the cells in IE **Warning Area List** |
   | **Warning Area List** | Yes | List of cells that cover the alert area |
   | **Repetition Period** | Yes | According to the timing requested in flow 1. |
   | **Extended Repetition Period** | No | |
   | **Number of Broadcast Requested** | Yes | According to the timing requested in flow 1. |
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

4. The MME sends one or more WRITE-REPLACE WARNING INDICATION messages with 
content according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Broadcast Scheduled Area List** | Yes | A list with cells listed in *Warning Area List* IE in flow 2 |
   | **Broadcast Empty Area List** | No | |

If only one WRITE-REPLACE WARNING INDICATION is received, then the *Broadcast 
Scheduled Area List* shall contain all the cells in the *Warning Area List* IE 
in flow 2. If more than one WRITE-REPLACE WARNING INDICATION are received, then
the union of all the *Broadcast Scheduled Area List* IEs received shall contain
all the cells inside the *Warning Area List* IE in flow 2.

5. Handsets in the alert area receive the alert and display it correctly.

## Iterations

This TC should be iterated for the alert types and message lengths in the 
following table that are applicable in the country in which the CBC is 
deployed:

| Iteration | Alert Type | Message identifier | Text length |
|:---:|------------|:------------------:|:---:|
| 1 | EU-Alert Level 1 \ WEA Presidential | 4383 (0x111F) | Short |
| 2 | EU-Alert Level 2 \ WEA Extreme | [4384, 4385] ([0x1120, 0x1121]) | Short |
| 3 | EU-Alert Level 3 \ WEA Severe | [4386 ... 4391] ([0x1122 ... 0x1127) | Short |
| 4 | EU-Alert & WEA AMBER | 4392 (0x1128) | Short |
| 5 | WEA RMT | 4393 (0x1129) | Short |
| 6 | WEA Exercise | 4394 (0x112A) | Short |
| 7 | WEA Operator defined use | 4395 (0x112B) | Short |
| 8 | EU-Alert Level 4 \ WEA Public Safety | 4397 (0x112D) | Short |
| 9 | WEA State/Local test | 4399 (0x112F) | Short |
| 10 | EU-Alert Level 1 \ WEA Presidential | 4383 (0x111F) | Long |
| 11 | EU-Alert Level 2 \ WEA Extreme | [4384, 4385] ([0x1120, 0x1121]) | Long |
| 12 | EU-Alert Level 3 \ WEA Severe | [4386 ... 4391] ([0x1122 ... 0x1127) | Long |
| 13 | EU-Alert & WEA AMBER | 4392 (0x1128) | Long |
| 14 | WEA RMT | 4393 (0x1129) | Long |
| 15 | WEA Exercise | 4394 (0x112A) | Long |
| 16 | WEA Operator defined use | 4395 (0x112B) | Long |
| 17 | EU-Alert Level 4 \ WEA Public Safety | 4397 (0x112D) | Long |
| 18 | WEA State/Local test | 4399 (0x112F) | Long |
| 19 | EU-Alert Level 1 \ WEA Presidential | 4383 (0x111F) | Very long |
| 20 | EU-Alert Level 2 \ WEA Extreme | [4384, 4385] ([0x1120, 0x1121]) | Very long |
| 21 | EU-Alert Level 3 \ WEA Severe | [4386 ... 4391] ([0x1122 ... 0x1127) | Very long |
| 22 | EU-Alert & WEA AMBER | 4392 (0x1128) | Very long |
| 23 | EU-Alert Level 4 \ WEA Public Safety | 4397 (0x112D) | Very long |

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
