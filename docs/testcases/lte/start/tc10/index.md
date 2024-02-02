---
lang: en-GB
title: LTE TC START-10
description: Broadcast Failure in one eNB.
sidebar: 
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#start-alert'
- text: 'START-10'
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
---

# **START-10** Broadcast Failure in one eNB.

## Description

Check that the CBC handles correctly the reception of *Broadcast Empty Area 
List* IE in indication messages. This IE contains a list of *eNB IDs* with the
eNBs that have not confirmed active broadcast to the MME.

*Correct handling* of this case is implementation specific. In general, the CBC
should, at least, log this event. It can also generate an alarm towards the 
fault management (FM) O&M system (e.g. SNMP trap) and even report to the CBE.

::: tip
The left-most bits of the Cell ID within an ECGI contain the *eNB ID*. I.e. the
CBC can use the *ENB ID* to resolve which cells have failed to broadcast the 
alert. If supported by the CBE - CBC interface, the CBC can translate this cell 
information into a *geographic area* and report the failure to the CBE.
:::

## Pre-requisites

* Force one eNB in the *Warning Area List" IE of flow 2 to not include the 
  *Broadcast Completed Area List* IE in the WRITE-REPLACE-WARNING Response to 
  the MME.  

::: tip Possible ways to meet this pre-requisite are:

* If possible, block CB in one of the eNBs for the alert level used in this 
  test.
* change manually, in the cell database of the CBC, the non eNB UD bits of the 
  CID part of all the EGCIs of this eNB, or
* import this same incorrect information into the cell database of the CBC, or
:::

## Steps to execute

1. CBE sends CAP Alert message with:
   - A single *info* element. I.e. only one message in one language.
   - *alertinfo.language.code* set to the value of the local language (e.g. 
      sl-SI for Slovenian).
   - *alertinfo.instruction.text* content of the alert message in local 
      language.
   - Time information that allows the CBC to calculate the *repetition period*
     and the *number of repetitions*.
   - Alert area with several cells of the same TA.

## Information flow

<div style="text-align: center;">

![tc_lte_start_10](/assets/img/flows/lte/start/tc_lte_start_10.svg)

</div>

## Result

Verify that:

1. The CBC sends one WRITE-REPLACE WARNING REQUEST to the MME that controls 
   eNBs in the TA that covers the alert area. Presence of parameters 
   in this message shall be as shown in the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Matching alert level and language |
   | **Serial Number** | Yes |  |
   | **List of TAIs** | Yes | one TAI |
   | **Warning Area List** | Yes | List of cells that cover the alert area |
   | **Repetition Period** | Yes | According to the timing requested in flow 1 |
   | **Extended Repetition Period** | No | |
   | **Number of Broadcast Requested** | Yes | According to the timing requested in flow 1 |
   | **Warning Type** | No | |
   | **Warning Security Information** | No | |
   | **Data Coding Scheme** | Yes | Set for the language selected according to 3GPP TS 23.038 |
   | **Warning Message Contents** | Yes | Alert message encoded according to the value of DCS above |
   | **Concurrent Warning Message Indicator** | Yes | true |
   | **Send Write-Replace-Warning-Indication** | Yes | true |
   | **Global eNB ID** | No |

2. The MME that receives flow 2 responds with a WRITE-REPLACE WARNING RESPONSE
   message with content according to the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | No |  |

3. The MME that receives flow 2 sends one or more WRITE-REPLACE WARNING 
   INDICATION messages with content according to the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Broadcast Scheduled Area List** | Yes | List of cells for which broadcast is active |
   | **Broadcast Empty Area List** | Yes | List with the eNB ID for which broadcast failed |

  If more than one of these messages is received from the MME, then only one
  shall contain the *Broadcast Empty Area List* IE.

4. Broadcast is active in all the cells of eNBs that have not reported a 
   failure to broadcast.
5. Proper event information is logged including the eNB ID that has reported 
   the failure.
6. If applicable, the CBC raises an alarm in the FM system at the O&M centre.
7. Report to the CBE, if the CBE-CBC interface supports it.
