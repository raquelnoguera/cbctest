---
lang: en-GB
title: LTE TC START-8
description: Unknown TAI in *List of TAIs* IE that contains a single TAI.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#start-alert'
- text: 'START-8'
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

# **START-8** Unknown TAI in *List of TAIs* IE that contains a single TAI.

## Description

Check that the CBC handles correctly unknown TAIs reported by an MME.

Most often the cause of this condition is misconfiguration in the CBC that 
should be fixed by operations personnel.

*Correct handling* of this case is implementation specific. In general, the CBC
should, at least, log this event. It can also generate an alarm towards the 
fault management O&M system (e.g. SNMP trap).

## Pre-requisites

* Associate all the radio cells of the alert area to an invalid TAI.

::: tip
Possible ways to execute this TC are:

* change manually the TAI data for the cells in the cell 
database of the CBC.
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
   - Alert area within a single TA.

## Information flow

<div style="text-align: center;">

![tc_lte_start_8](/assets/img/flows/lte/start/tc_lte_start_8.svg)

</div>

## Result

Verify that:

1. The CBC sends a WRITE-REPLACE WARNING REQUEST to the MME that handles the
   single TAI in the *List of TAIs*. Presence of parameters in this message 
   shall be as shown in the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Matching alert level and language |
   | **Serial Number** | Yes |  |
   | **List of TAIs** | Yes | Single TAI (unknown to the MME) |
   | **Warning Area List** | Yes | List of cells that cover the alert area |
   | **Repetition Period** | Yes | According to the timing requested in flow 1 |
   | **Extended Repetition Period** | No | |
   | **Number of Broadcast Requested** | Yes | According to the timing requested in flow 1 |
   | **Warning Type** | No | |
   | **Warning Security Information** | No | |
   | **Data Coding Scheme** | Yes | Set for the language selected according to 3GPP TS 23.038 |
   | **Warning Message Contents** | Yes | Alert message encoded according to the value of DCS above |
   | **Concurrent Warning Message Indicator** | Yes | true |
   | **Send Write-Replace-Warning-Indication** | May | true |
   | **Global eNB ID** | No |

2. The MME responds with a WRITE-REPLACE WARNING RESPONSE message with content
   according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Cause** | Yes | Set to value *Tracking area not valid* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | Yes | TAI in *List of TAIs* in flow 2 |

3. No broadcast is active in any eNB.
4. Event is logged.
5. If applicable, the CBC raises an alarm in the FM system at the O&M centre.
6. Report to the CBE, if the CBE-CBC interface supports it.
