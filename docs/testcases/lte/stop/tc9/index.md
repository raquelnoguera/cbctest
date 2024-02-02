---
lang: en-GB
title: LTE TC STOP-9
description: Partial stop of an active alert.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#stop-alert'
- text: 'STOP-9'
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

# **STOP-9** Partial stop of an active alert.

## Description

Stop ongoing alert in some of the cells in which it is active and continue 
active in all other cells.

## Pre-requisites

* An alert is ongoing within an area covered by a multiple cells.

## Steps to execute

1. CBE sends CAP Cancel message with:
   - The same *identifier* as in the CAP Alert message that started the 
     broadcast.
   - An area that is a subset of the area of the current active alert. 

## Information flow

<div style="text-align: center;">

![tc1_lte_stop_9](/assets/img/flows/lte/stop/tc_lte_stop_9.svg)

</div>

## Result

Verify that:

1. The CBC sends a STOP WARNING REQUEST only to the MMEs that control the eNBs
   that shall stop broadcasting the ongoing alert. Presence of parameters in 
   this message shall be as shown in the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/stop/tc9/#iterations) |
   | **Serial Number** | Yes | Same as for ongoing broadcast |
   | **List of TAIs** | May | TAIs of all the cells in IE **Warning Area List** |
   | **Warning Area List** | May | List of cells in which the alert shall stop |
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

3. The MME sends one or more STOP WARNING INDICATION messages with content
   according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Broadcast Cancelled Area List** | Yes | A list with cells listed in *Warning Area List* IE in flow 2 |
   | **Broadcast Empty Area List** | No | |

The union of all the ECGIs in all the *Broadcast Cancelled Area List" IEs 
received shall contain all the ECGIs inside the *Warning Area List* of flow 2.

4. Broadcast of the alert has stopped in all the cells inside the *Warning Area
   List* of flow 2, but continues active in all other cells in which it was 
   active.

5. If supported by the CBE - CBC interface, the CBC informs the CBE about the
   successful outcome of the partial stop.

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