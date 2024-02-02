---
lang: en-GB
title: LTE TC UPDATE-4
description: Update message of ongoing warning in additional language. With indication.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#update-alert'
- text: 'UPDATE-4'
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

# **UPDATE-4** Update message of ongoing warning in additional language. With indication.

## Description

Update the message content of an ongoing cell broadcast in a language other
than the local one. The alert area is not modified and indication is requested 
from the network.

## Pre-requisites

* Activate a cell broadcast message in a language other than the local one in a
  specific area (e.g. following the procedure in TC [START-4](/testcases/lte/start/tc4)). 
  For simplicitly, this TC is assumes that the area is fully covered by eNBs 
  controlled by the same MME.
* Alert timing defined so that the broadcast will run for suficient time to 
  execute this test completely.
* Configure the different systems to request SBc-AP indication messages.

## Steps to execute

1. CBE sends CAP Alert message with:
   - *msgType* sub-element set to "Update".
   - *references* sub-element contains the *identifier* of the CAP Alert 
     message that triggered the current active broadcast.
   - A single *info* element with the updated message in a language other 
     than the local one. The message shall be at least 2 pages long but not 
     more than 4 pages.
   - Time information that allows the CBC to calculate the *repetition period*
     and the *number of repetitions*.
   - Alert area shall be the same as that in the CAP Alert message (flow 1) 
     that triggered the broadcast message being updated.

## Information flow

<div style="text-align: center;">

![tc_lte_update_4](/assets/img/flows/lte/update/tc_lte_update_4.svg)

</div>

## Result

A CBC has two different ways to process this update request from the CBE. The 
result depends on the option implemented.

### Option 1 - CBC uses WRWReq

Verify that:

1. The CBC sends a WRITE-REPLACE WARNING REQUEST (flow 6.a) to the MME that 
   controls the eNBs that cover the alert area. Presence of parameters in this
   message shall be as shown in the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/update/tc4/#iterations) |
   | **Serial Number** | Yes | Same values of [*GS*](/identifiers/#serial-number) and [*Message code*](/identifiers/#serial-number) as in flow 2 but different [*update number*](/identifiers/#serial-number)  |
   | **List of TAIs** | Should | Same as flow 2 |
   | **Warning Area List** | Yes | Same as flow 2 |
   | **Repetition Period** | Yes | According to the timing requested in flow 4 |
   | **Extended Repetition Period** | No | |
   | **Number of Broadcast Requested** | Yes | According to the timing requested in flow 4 |
   | **Warning Type** | No | |
   | **Warning Security Information** | No | |
   | **Data Coding Scheme** | Yes | Set for additional language according to 3GPP TS 23.038 |
   | **Warning Message Contents** | Yes | Alert message encoded according to the value of DCS above |
   | **Concurrent Warning Message Indicator** | Yes | true |
   | **Send Write-Replace-Warning-Indication** | No |
   | **Global eNB ID** | No |

3. The MME responds with a WRITE-REPLACE WARNING RESPONSE (flow 7.a) with 
   contents according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 6.a |
   | **Serial Number** | Yes | Same as in flow 6.a |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | No | |

4. The MME sends one or more WRITE-REPLACE WARNING INDICATION (flow 8.a) 
   messages with content according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 6.a |
   | **Serial Number** | Yes | Same as in flow 6.a |
   | **Broadcast Scheduled Area List** | Yes | A list with cells listed in *Warning Area List* IE in flow 2 |
   | **Broadcast Empty Area List** | No | |

If only one WRITE-REPLACE WARNING INDICATION is received, then the *Broadcast 
Scheduled Area List* shall contain all the cells in the *Warning Area List* IE 
in flow 6.a. If more than one WRITE-REPLACE WARNING INDICATION are received, then
the union of all the *Broadcast Scheduled Area List* IEs received shall contain
all the cells inside the *Warning Area List* IE in flow 6.a.

5. Handsets in the alert area receive the updated alert and display it 
   correctly, regardless of whether they were in the area and displayed the
   first version of this message or entered the area once the message was
   updated.

### Option 2 - CBC Stops the initial message and sends the updated as a new message 

Verify that:

1. The CBC sends a STOP WARNING REQUEST (flow 6.b) to the MME that controls the
   eNBs that cover the alert area. Presence of parameters in this message shall
   be as shown in the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/update/tc4/#iterations) |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **List of TAIs** | May | Same as in flow 2 |
   | **Warning Area List** | May | Same as in flow 2 |
   | **Send Stop Warning Indication** | No |  |
   | **Stop All Indication** | No |  |

2. The MME responds with a STOP WARNING RESPONSE (flow 7.b) with contents 
   according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | No | |

3. The MME sends one or more STOP WARNING INDICATION (flow 8.b) messages with 
   content according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 6.b |
   | **Serial Number** | Yes | Same as in flow 6.b |
   | **Broadcast Cancelled Area List** | Yes | A list with cells listed in *Warning Area List* IE flow 2 |
   | **Broadcast Empty Area List** | No | |

If only one STOP WARNING INDICATION is received, then the *Broadcast 
Cancelled Area List* shall contain all the cells in the *Warning Area List* IE 
received in the WRITE-REPLACE WARNING Request that created the broadcast. If 
more than one STOP WARNING INDICATION are received, then the union of all the 
*Broadcast Cancelled Area List* IEs received shall contain all the cells inside 
the *Warning Area List* IE received in the WRITE-REPLACE WARNING Request that 
created the broadcast.

4. Broadcast of the alert has stopped in all the cells in which it was active.

5. The CBC sends a WRITE-REPLACE WARNING REQUEST (flow 9.b) to the MME that 
   controls the eNBs that cover the alert area. Presence of parameters in this
   message shall be as shown in the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/update/tc4/#iterations) |
   | **Serial Number** | Yes | Different to the one in flow 2 |
   | **List of TAIs** | Should | Same as flow 2 |
   | **Warning Area List** | Yes | Same as flow 2 |
   | **Repetition Period** | Yes | According to the timing requested in flow 5 |
   | **Extended Repetition Period** | No | |
   | **Number of Broadcast Requested** | Yes | According to the timing requested in flow 5 |
   | **Warning Type** | No | |
   | **Warning Security Information** | No | |
   | **Data Coding Scheme** | Yes | Set for additional language according to 3GPP TS 23.038 |
   | **Warning Message Contents** | Yes | Alert message encoded according to the value of DCS above |
   | **Concurrent Warning Message Indicator** | Yes | true |
   | **Send Write-Replace-Warning-Indication** | No |
   | **Global eNB ID** | No |

6. The MME responds with a WRITE-REPLACE WARNING RESPONSE (flow 10.b) with 
   contents according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 9.b |
   | **Serial Number** | Yes | Same as in flow 9.b |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | No | |

7. The MME sends one or more WRITE-REPLACE WARNING INDICATION (flow 11.b) 
   messages with content according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 9.b |
   | **Serial Number** | Yes | Same as in flow 9.b |
   | **Broadcast Scheduled Area List** | Yes | A list with cells listed in *Warning Area List* IE in flow 9.b |
   | **Broadcast Empty Area List** | No | |

If only one WRITE-REPLACE WARNING INDICATION is received, then the *Broadcast 
Scheduled Area List* shall contain all the cells in the *Warning Area List* IE 
in flow 9.b. If more than one WRITE-REPLACE WARNING INDICATION are received, then
the union of all the *Broadcast Scheduled Area List* IEs received shall contain
all the cells inside the *Warning Area List* IE in flow 9.b.

8. Handsets in the alert area receive the updated alert and display it 
   correctly, regardless of whether they were in the area and displayed the
   first version of this message or entered the area once the message was
   updated.

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
