---
lang: en-GB
title: LTE TC ERROR-2
description: IE or IE group marked with "Reject IE" not comprehended in STOP WARNING REQUEST.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#error'
- text: 'ERROR-2'
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

# **ERROR-2** IE or IE group marked with "Reject IE" not comprehended in STOP WARNING REQUEST

## Description

This TC covers some of the "Abstract Syntax Error" described in section 
4.5.3.4.3 of 3GPP TS29.168.

The CBC receives a STOP WARNING RESPONSE with a *Cause* IE that
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
2. CBE cancels the alert created in step 1 after at least one repetition period
   time has elapsed.
   For iteration 4, the CBE needs to send a request to cancel all the ongoing
   alerts.

## Information flow

<div style="text-align: center;">

![tc_lte_error_2](/assets/img/flows/lte/error/tc_lte_error_2.svg)

</div>

## Result

Verify that:

1. The *Cause* IE inside the STOP WARNING RESPONSE message is set to 
   value 1 (Parameter not recognised).
2. The STOP WARNING RESPONSE message includes a *Criticality Diagnostics* IE
   with one *Information Element Criticality Diagnostics" IE with:
   - IE Criticality set to value 0 (*Reject*).
   - IE ID set to set to the value that corresponds to the current 
     [interation](/testcases/lte/error/tc2/#iterations).
   - Type of Error set to value 0 (*Not understood*).
3. The alert broadcast is **NOT** stopped.
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
| 4 | Stop-All Indicator |

For iteration 4, the *Stop-All Indicator* IE shall be included in the 
STOP WARNING REQUEST message in flow 5. 
