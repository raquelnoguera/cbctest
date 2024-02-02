---
lang: en-GB
title: LTE TC FAILRESTART-3
description: Failure indication for an ongoing alert.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#failure-and-restart-indications'
- text: 'FAILRESTART-3'
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

# **FAILRESTART-3** Failure indication for an ongoing alert

## Description

Cell broadcast starts correctly in all cells and then fails in one or more
cells.

## Pre-requisites

* Dispose the conditions for the currently running broadcast to fail in one 
  or more cells of the alerting area.

::: tip
A possible way to execute this test case in a real LTE network is to block / 
disable, once the alert is running, cell broadcasting functionality in one or 
more of the eNBs by whatever means the eNB vendor provides for this.
:::

## Steps to execute

1. CBE sends CAP Alert message with:
   - A single *info* element. I.e. only one message in one language.
   - *alertinfo.language.code* set to the value of the local language (e.g. 
      sl-SI for Slovenian).
   - *alertinfo.instruction.text* content of the alert message in local 
      language. Using a very long message that fills the 15 *pages* might help
      to trigger a failure.
   - Time information that allows the CBC to calculate the *repetition period*
     and the *number of repetitions*.
   - Alert area that is inside the area controlled by a single MME. I.e.
     only one MME needs to be involved in this test.
2. Trigger the condition to force the failure in one eNB.

## Information flow

<div style="text-align: center;">

![tc_lte_failrestart_3](/assets/img/flows/lte/failrestart/tc_lte_failrestart_3.svg)

</div>

## Result

Verify that:

1. The message sequence completes as shown in the flow above (note that there 
   might be additional WRITE REPLACE WARNING INDICATION messages after flow 3 
   if this functionality is enabled).
2. The failure event is logged by the CBC.
3. If the CBC is configured to raise an alarm in this case, then an alarm is
   raised.
4. If the CBE - CBC interface provides the means for conveying information 
   about this type of failures, then the CBC sends this information to the CBE.

## Iterations

In principle, this TC does not require any iteration. As a suggestion, the 
following iterations can be tested:

1. Failure affects a single eNB.
2. Failure affects multiple eNBs.
