---
lang: en-GB
title: LTE TC UPDATE-11
description: Update timing of ongoing warning in local language. With indication.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#update-alert'
- text: 'UPDATE-11'
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

# **UPDATE-11** Update timing of ongoing warning in local language. With indication.

## Description

Change the repetition period of an ongoing cell broadcast in local language.
The message and area are not modified and indication is requested from the 
network.

## Pre-requisites

* Activate a cell broadcast message in local language in a specific area (e.g. 
  following the procedure in TC [START-3](/testcases/lte/start/tc3)). For 
  simplicitly, this TC is assumes that the area is fully covered by eNBs 
  controlled by the same MME.
* Alert timing defined so that the broadcast will run for suficient time to 
  execute this test completely.
* Configure the different systems to request SBc-AP indication messages.

## Steps to execute

1. CBE sends CAP Alert message (flow 5) with:
   - *msgType* sub-element set to "Update".
   - *references* sub-element contains the *identifier* of the CAP Alert 
     message that triggered the current active broadcast (flow 1).
   - A single *info* element with the same alert message and area as in flow 1.
   - Time information that allows the CBC to calculate the *repetition period*
     and the *number of repetitions* shall be set to derive a different 
     *repetition period* to the one in flow 1. The *number of repetitions* 
     shall be reset to complete the broadcast in the required time using the
     new *repetition period*.

## Information flow

<div style="text-align: center;">

![tc_lte_update_11](/assets/img/flows/lte/update/tc_lte_update_11.svg)

</div>

## Result

A CBC has two different ways to process this update request from the CBE. The 
result depends on the option implemented.

For *both* options, verify that after the flow is executed:

1. The value of IE **Message Identifier** corresponds to the message type for
   this [iteration](/testcases/lte/update/tc11/#iterations).

2. The *Message Identifier*, *Sequence Number* and the alert area are not 
   changed and:
   
   a. Handsets entering the alert area that have NOT already shown the alert DO
      alert the user.
 
   b. Handsets entering the alert areas that have alreadt received the alert do 
      NOT alert the user.

3. The alert is broadcasted in SIB12 with the newly set periodicity.

## Option 1 - Stop and re-Start

In this option, the CBC completely stops the ongoing campaign and restarts it 
in the new alert area with the same **Serial Number**.

Verify that:

1. The values of IEs **Message Identifier** and **Serial Number** in flows 2,
   6.a and 9.a are identical.

2. The values of IEs **List of TAIs** (if present) and **Warning Area List** in 
   flows 2 and 6.a are identical.

3. The **Repetition Period** and the **Number of Broadcast Requested** in flow 
   9.a are updated to the new values derived from timing parameters in flow 5.


## Option 2 - Update

In this option, a WRWR message is used to update the values of the *Repetition
Period* and the *Number of Broadcast Requested*.

Verify that:

1. The values of IEs **Message Identifier** and **Serial Number** in flows 2 
   and 6.b are identical.

2. The content of IEs **List of TAIs** (if present) and **Warning Area List** 
   in flows 2 and 6.b are identical.

3. The **Repetition Period** and the **Number of Broadcast Requested** in flow
   6.b updates to ongoing brodcast with the new values derived from timing 
   parameters in flow 5.

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
