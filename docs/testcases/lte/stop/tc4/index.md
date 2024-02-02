---
lang: en-GB
title: LTE TC STOP-4
description: Completely stop, with indication, a time-limited alert in additional language.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#stop-alert'
- text: 'STOP-4'
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

# **STOP-4** Completely stop, with indication, a limited-alert in additional language.

## Description

Stop ongoing time-limited cell broadcast of an alert in additional language in
an area covered by cells within a single TA.

## Pre-requisites

* An alert for which the number of repetitions has been set is ongoing within 
  an area covered by a single TA. The alert message is in a language different 
  to the local language.

## Steps to execute

1. CBE sends CAP Cancel message with:
   - The same *identifier* as in the CAP Alert message that started the 
     broadcast.

The CAP Cancel message shall contain all other mandatory paramters, but it does
no need to contain *info* elements.

## Information flow

<div style="text-align: center;">

![tc1_lte_stop_4](/assets/img/flows/lte/stop/tc_lte_stop_4.svg)

</div>

## Result

Verify that:

1. The CBC sends a STOP WARNING REQUEST only to the one MME 
   that controls the eNBs that control the cells where the ongoing alert is 
   broadcasted. Presence of parameters in this message shall be as shown in the
   following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/stop/tc4/#iterations) |
   | **Serial Number** | Yes | Same as for ongoing broadcast |
   | **List of TAIs** | May | TAI of the cells in IE **Warning Area List** |
   | **Warning Area List** | May | List of cells that cover the alert area |
   | **Send Stop Warning Indication** | No |  |
   | **Stop All Indication** | No |  |

2. The MME responds with a STOP WARNING RESPONSE with contents 
   according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 1 |
   | **Serial Number** | Yes | Same as in flow 1 |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | No | |

3. The MME sends one or more STOP WARNING INDICATION messages with content
   according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
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
