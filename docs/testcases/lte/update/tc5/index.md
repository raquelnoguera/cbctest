---
lang: en-GB
title: LTE TC UPDATE-5
description: Update area of ongoing warning in local language. No indication.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#update-alert'
- text: 'UPDATE-5'
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

# **UPDATE-5** Update area of ongoing warning in local language. No indication.

## Description

Update the alert area of an ongoing cell broadcast in local language. the
message is not modified and indication is not requested from the network.

::: warning 
In principle, the recommended way to handle this type of update is for the CBE 
to explicitly stop the current alert and start a new one. A **new** alert means that
the CBC will use a new sequence number, which will cause all handsets in the 
overlapping area to re-play the alert even if they already showed the same 
message to the user.
:::

## Pre-requisites

* Activate a cell broadcast message in local language in a specific area (e.g. 
  following the procedure in TC [START-1](/testcases/lte/start/tc1)). For 
  simplicitly, this TC is assumes that the area is fully covered by eNBs 
  controlled by the same MME.
* Alert timing defined so that the broadcast will run for suficient time to 
  execute this test completely.
* Configure the different systems to not request SBc-AP indication messages.

## Steps to execute

1. CBE sends CAP Alert message (flow 4) with:
   - *msgType* sub-element set to "Update".
   - *references* sub-element contains the *identifier* of the CAP Alert 
     message that triggered the current active broadcast (flow 1).
   - A single *info* element with the same alert message as in flow 1.
   - Time information that allows the CBC to calculate the *repetition period*
     and the *number of repetitions* set to values that do not change the
     timing in flow 1.
   - Alert area shall be selected such as one or more new cells are added 
     and one or more old cells are removed from the original alert area in 
     flow 1.


## Information flow

<div style="text-align: center;">

![tc_lte_update_5](/assets/img/flows/lte/update/tc_lte_update_5.svg)

</div>

## Result

A CBC has two different ways to process this update request from the CBE. The 
result depends on the option implemented.

For *both* options, verify that after the flow is executed:

1. The value of IE **Message Identifier** corresponds to the message type for
   this [iteration](/testcases/lte/update/tc5/#iterations).

2. Broadcast has stopped in removed cells. I.e. Handsets entering cells removed
   from the flow 1 alert area that did NOT receive the original alert do NOT 
   alert the user.

3. Nothing changes in overlaping cells. i.e. after the update, the message is 
   still broadcasted with the same sequence number and:
   
   a. Handsets entering overlapping cells for the alert areas in flow 1 and 
      flow 4 that did NOT receive the original alert DO alert the user.
 
   b. Handsets in overlapping cells for the alert areas in flow 1 and flow 4 
      that received the original alert do NOT alert the user.

4. Broadcast has started in the added cells with the same **Message 
   Identifier** and **Serial Number** as the in all other cells of the alert
   area. The value of these two IEs is the same for flow 2 and flow 7.a
   (for option 1) and flow 5.b (for option 2). As a result:
   
   a. Handsets in cells added from the flow 1 that did NOT received the
      original alert DO alert the user.

   b. Handsets in cells added from the flow 1 that received the original
      alert in another cell DO NOT alert the user.

## Option 1 - Stop and re-Start

In this option, the CBC completely stops the ongoing campaign and restarts it 
in the new alert area with the same **Serial Number**.

Verify that:

1. The values of IEs **Message Identifier** and **Serial Number** in flows 2, 
   5.a and 7.a are identical.

2. The values of IEs **List of TAIs** (if present) and **Warning Area List** in 
   flows 2 and 5.a are identical.

3. The **Warning Area List** in flow 7.a includes the overlapping and the newly
   added cells and does not include any of the removed cells.

4. The value of IE **Repetition Period** in flows 2 and 7.a are identical.

5. The value of IE **Number of Broadcast Requested** in flow 7.a is set to the 
   **Number of Broadcast Requested** in flow 2 minus the number of broadcast
   periods that have passed between flow 2 and flow 7.a.

## Option 2 - Start in new cells and Stop in removed cells

In this option, the alert area is modified by activating the broadcast of the 
message in the added cells and stopping it in the removed cells. Nothing needs 
to be done in overlapping cells.

Verify that:

1. The values of IEs **Message Identifier** and **Serial Number** in flows 2,
   5.b and 7.b are identical.

2. IE **Warning Area List** in flow 5.b contains only the new cells added.

3. IE **Warning Area List** in flow 7.b contains only the removed cells.

4. The value of IE **Repetition Period** in flows 2 and 5.b are identical.

5. The value of IE **Number of Broadcast Requested** in flow 5.b is set to the 
   **Number of Broadcast Requested** in flow 2 minus the number of broadcast
   periods that have passed between flow 2 and flow 5.b.

## Iterations

This TC should be iterated for the alert types in the following table that are
applicable in the country in which the CBC is deployed:

| Iteration | Alert Type | Message identifier |
|:---:| ------------ |:------------------:|
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
