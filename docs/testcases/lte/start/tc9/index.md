---
lang: en-GB
title: LTE TC START-9
description: Unknown TAI in *List of TAIs* IE that contains multiple TAIs.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#start-alert'
- text: 'START-9'
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

# **START-9** Unknown TAI in *List of TAIs* IE that contains multiple TAIs.

## Description

Check that the CBC handles correctly unknown TAIs reported by MMEs.

Most often the cause of this condition is misconfiguration in the CBC that 
should be fixed by operations personnel.

*Correct handling* of this case is implementation specific. In general, the CBC
should, at least, log this event. It can also generate an alarm towards the 
fault management (FM) O&M system (e.g. SNMP trap).

## Pre-requisites

* Associate some radio cells of the alert area to invalid TAIs. The alert area
  should have cells in one or more valid TAIs and cells in on or more invalid 
  TAIs. 

::: tip Possible ways to force this pre-requisite are:

* change manually the TAI data for some cells in the cell 
database of the CBC, or
* import incorrect information into the cell database of the CBC.
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
   - Alert area with cells in two or more TAIs.

## Information flow

<div style="text-align: center;">

![tc_lte_start_9](/assets/img/flows/lte/start/tc_lte_start_9.svg)

</div>

## Result

Verify that:

1. The CBC sends one WRITE-REPLACE WARNING REQUEST to each of the MMEs that 
   control eNBs in the TAs that cover the alert area. Presence of parameters 
   in this message shall be as shown in the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Matching alert level and language |
   | **Serial Number** | Yes |  |
   | **List of TAIs** | Yes | Two or more TAIs (at least one unknown to the MME) |
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

2. Each MME that receives flow 2 responds with a WRITE-REPLACE WARNING RESPONSE
   message with content according to the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | Yes | unknown TAIs from the *List of TAIs* in flow 2 |

3. Each MME that received flow 2 and controls eNBs with cells in the *Warning
   Area List* in flow 2 that are inside valid TAIs from the *List of TAIs* in 
   flow 2, sends one or more WRITE-REPLACE WARNING INDICATION messages with 
   content according to the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Broadcast Scheduled Area List** | Yes | List of cells for which broadcast is active |
   | **Broadcast Empty Area List** | May | List of cells for which broadcast failed |

4. Broadcast is active only in cells in the *Warning Area List* in flow 2 that
   are inside valid TAIs from the *List of TAIs* in flow 2.
5. Event is logged for invalid TAIs.
6. If applicable, the CBC raises an alarm in the FM system at the O&M centre.
7. Report to the CBE, if the CBE-CBC interface supports it.
