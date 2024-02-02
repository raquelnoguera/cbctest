---
lang: en-GB
title: LTE TC ERROR-3
description: IE or IE group marked with "Reject IE" not comprehended in WRITE-REPLACE WARNING INDICATION.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#error'
- text: 'ERROR-3'
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

# **ERROR-3** IE or IE group marked with "Reject IE" not comprehended in WRITE-REPLACE WARNING INDICATION

## Description

This TC covers some of the "Abstract Syntax Error" described in section 
4.5.3.4.3 of 3GPP TS29.168.

The CBC receives a WRITE-REPLACE WARNING INDICATION with an IE that
it cannot comprehen. This IE has an assigned criticality of "Reject".

::: warning
This test can be executed against an MME simulator / emulator. It might not be 
possible to trigger the required behaviour in a production environment.
:::

## Pre-requisites

* Define an alert area within the coverage of a single TA.
* There is no ongoing cell broadcast in any of the cells that cover the alert 
  area.
* Configure the MME to send *indication* messages.
* The MME is configured to sent incorrect information inside the IE of the
  current [interation](/testcases/lte/error/tc3/#iterations) in flow 4 in order 
  to trigger flow 5.

## Steps to execute

1. CBE sends CAP Alert message with:
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

![tc_lte_error_3](/assets/img/flows/lte/error/tc_lte_error_3.svg)

</div>

## Result

Verify that:

1. The *Cause* IE inside the ERROR INDICATION message is set to 
   value 1 (Parameter not recognised) or value 2 (Parameter value invalid).
2. The ERROR INDICATION message includes a *Criticality Diagnostics* IE
   with one *Information Element Criticality Diagnostics" IE with:
   - IE Criticality set to value 0 (*Reject*).
   - IE ID set to set to the value that corresponds to the current 
     [interation](/testcases/lte/error/tc3/#iterations).
   - Type of Error set to value 0 (*Not understood*).
3. The alert broadcast should be active at least in the part of the alert 
   area not affected by this error.
4. The CBC logs the event with enough information for auditing purposes.
5. If configured to do so, the CBC raises a procedural alarm towards O&M.
6. If supported by the CBE - CBC interface, the CBC reports the failure
   to the CBE in whichever means the protocol in this interface provides
   for this condition.

## Iterations

This TC should be iterated for comprehension errors of the following IEs:

| Iteration | IE |
|:---------:| -- |
| 1 | Message identifier |
| 2 | Serial Number |
| 3 | Broadcast Scheduled Area List |
