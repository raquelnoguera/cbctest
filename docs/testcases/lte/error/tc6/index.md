---
lang: en-GB
title: LTE TC ERROR-6
description: Unknown Tracking Area List not comprehended in WRITE-REPLACE WARNING RESPONSE.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#error'
- text: 'ERROR-6'
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

# **ERROR-6** Unknown Tracking Area List not comprehended in WRITE-REPLACE WARNING RESPONSE.

## Description

This TC covers some of the "Abstract Syntax Error" described in section 
4.5.3.4.3 of 3GPP TS29.168 for an IE that has a criticality of "Ignore IE".

The CBC receives a WRITE-REPLACE WARNING RESPONSE with a *Unknown Tracking Area
List* IE that contains a value that it cannot comprehen, either because it 
contains invalid TAIs (e.g. invalid MCC or MNC) or TAIs that do not cover any
cell in the warning area requested in flow 2.

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
2.  Configure the MME to include an "Unknown Tracking Area List" IE in the 
    WRITE-REPLACE WARNING RESPONSE with at least one TAI that was not in the
    original list or has an incorrect MNC. 

## Information flow

<div style="text-align: center;">

![tc_lte_error_6](/assets/img/flows/lte/error/tc_lte_error_6.svg)

</div>

## Result

Verify that:

1. The CBC ignores the "Unknown Tracking Area List" IE received in flow 2. 
    It should log the event.
2. If configured to do so, the CBC raises a protocol error alarm towards 
   O&M.
3. If supported by the CBE - CBC interface, the CBC reports the failure
   to the CBE in whichever means the protocol in this interface provides
   for this condition.
4. The alert is broadcasted normally in the alert area.
