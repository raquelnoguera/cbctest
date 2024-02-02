---
lang: en-GB
title: LTE TC START-12
description: WRITE-REPLACE-WARNING Response not received or delayed. No MME pooling.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#start-alert'
- text: 'START-12'
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

# **START-12** WRITE-REPLACE-WARNING Response not received or delayed. No MME pooling.

## Description

Cell sends a request to broadcast an alert to one MME but The MME does either 
not respond to the CBC or respond too late, and the CBC has no fallback MME (no
MME pooling).

## Pre-requisites

* Define an alert area within the coverage of a single TA.
* There is no ongoing cell broadcast in any of the cells that cover the alert 
  area.
* The message is in the local language.
* Alert timing defined so it is easy to verify that the value of the parameters
  *Number of broadcast* and *broadcast period* that the CBC sends to the MME.
* The SCTP association between the CBC and the MME is working correctly. The 
  MME has no problem to receive messages from the CBC and respond to them.
* If it is possible, configure the MME to obtained the desired behaviour. This
  is, to accept flow 2 and either not send flow 3 or to delay sending flow 3 
  for sufficient time to allow the CBC to trigger a timeout.
  If the MME can be configured to not respond, then it shall not send any 
  reponse whatsoever to flow 2.

::: tip
One possibility to obtain the desired behaviour might be to disable CBS 
functionality in the MME. However, this may cause the MME to send an Error 
response to the CBC, which would invalidate the premise for the CBC to not
receive an answer.
:::

::: warning
If obtaining the desired behaviour from a real MME is not feasible, then either
test with an MME emulator / simulator (e.g. a Valid8 one, if available) or
ignore this TC. 
:::

## Steps to execute

2. CBE sends CAP Alert message with:
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

![tc_lte_start_12](/assets/img/flows/lte/start/tc_lte_start_12.svg)

</div>

## Result

Verify that:

1. The CBC sends a WRITE-REPLACE WARNING REQUEST only to the one MME 
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

2. When the timer expires the CBC logs the condition and, if configured, raises
   and alarm towards the FM solution via SNMP.

3. If the CBE-CBC interface support is, the CBC informs the CBE about the 
   "uncertain" outcome of the request.

4. If, after the timeout, the response is received from the MME, then alert is
   updated and considered active in the CBC.

5. If the CBE-CBC interface support is, the CBC updates the CBE about the 
   correct outcome for the alert request (flow 1).
