---
lang: en-GB
title: LTE TC TIMEOUT-1
description: Timer expiry for WRITE REPLACE WARNING procedure.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#timeout'
- text: 'TIMEOUT-1'
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

# **TIMEOUT-1** Timer expiry for WRITE REPLACE WARNING procedure

## Description

The CBC does not receive a response to a WRITE-REPLACE WARNING REQUEST.

::: warning
This test can be executed against an MME simulator / emulator. It is unlikely 
that it can be carried out in a production environment.
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

![tc_lte_timeout_1](/assets/img/flows/lte/timeout/tc_lte_timeout_1.svg)

</div>

## Result

WRITE-REPLACE WARNING is a class 1 procedure (request / response). Lack of 
response results in failure of the procedure.

Depending on implementation and configuration, the CBC may re-attempt the 
procedure multiple times.

Verify that:

1. The alert is not broadcasted.
2. The CBC logs the event with enough information for auditing purposes.
3. If configured to do so, the CBC raises a procedural alarm towards O&M.
4. If supported by the CBE - CBC interface, the CBC reports the failure
   to the CBE in whichever means the protocol in this interface provides
   for this condition.
