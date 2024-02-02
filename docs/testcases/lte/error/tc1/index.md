---
lang: en-GB
title: LTE TC ERROR-1
description: IE or IE group marked with "Reject IE" in WRITE-REPLACE WARNING REQUEST not comprehended.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#error'
- text: 'ERROR-1'
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

# **ERROR-1** IE or IE group marked with "Reject IE" in WRITE-REPLACE WARNING REQUEST not comprehended

## Description

This TC covers some of the "Abstract Syntax Error" described in section 
4.5.3.4.3 of 3GPP TS29.168.

The CBC receives a WRITE-REPLACE WARNING RESPONSE with a *Cause* IE that
indicates that a failure has occurred because an IE marked as "Reject IE" 
inside the WRITE-REPLACE WARNING REQUEST was not comprehended by the MME.

::: warning
This test can be executed against an MME simulator / emulator. It might not be 
possible to trigger the required behaviour in a production environment.
:::

## Pre-requisites

* Define an alert area within the coverage of a single TA.
* There is no ongoing cell broadcast in any of the cells that cover the alert 
  area. 

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

![tc_lte_error_1](/assets/img/flows/lte/error/tc_lte_error_1.svg)

</div>

## Result

Verify that:

1. The *Cause* IE inside the WRITE-REPLACE WARNING RESPONSE message is set to 
   value 1 (Parameter not recognised).
2. The WRITE-REPLACE WARNING RESPONSE message includes a *Criticality 
   Diagnostics* IE with one *Information Element Criticality Diagnostics* IE
   with:
   - IE Criticality set to value 0 (*Reject*).
   - IE ID set to set to the value that corresponds to the current 
     [interation](/testcases/lte/error/tc1/#iterations).
   - Type of Error set to value 0 (*Not understood*).
3. The alert broadcast is **NOT** started.
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
| 3 | List of TAIs |
| 4 | Repetition Period |
| 5 | Extended Repetition Period |
| 6 | Number of Broadcast Requested |
| 7 | Concurrent Warning Message Indicator |
