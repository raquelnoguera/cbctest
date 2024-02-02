---
lang: en-GB
title: LTE TC FAILRESTART-4
description: Failure indication for an ongoing alert created by another CBC.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#failure-and-restart-indications'
- text: 'FAILRESTART-4'
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

# **FAILRESTART-4** Failure indication for an ongoing alert created by another CBC

## Description

The MME reports a Cell broadcast failure in one or more cells for an ongoing 
alert that was created by a different CBC to the one that receives the failure 
message. 

## Pre-requisites

* Two CBCs needed (e.g. in geo-redundancy). Both CBCs have an active connection 
  to the MME. 
* Dispose the conditions for the broadcast to fail in one or more cells of the
  alerting area.

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
      language.
   - Time information that allows the CBC to calculate the *repetition period*
     and the *number of repetitions*.
   - Alert area that is inside the area controlled by a single MME. I.e.
     only one MME needs to be involved in this test.
2. The CAP alert message in step 1 is processed by CBC-A. 
3. Trigger the condition to force the failure in one eNB.

## Information flow

<div style="text-align: center;">

![tc_lte_failrestart_4](/assets/img/flows/lte/failrestart/tc_lte_failrestart_4.svg)

</div>

## Result

Verify that:

1. The message sequence completes as shown in the flow above (note that there 
   might be additional WRITE REPLACE WARNING INDICATION messages after flow 3
   if this functionality is enabled).
2. CBC-B ignores the failure message. It may log the message and / or raise an
   alarm, but it does not need to take any further action.

