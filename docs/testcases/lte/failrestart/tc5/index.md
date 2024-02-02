---
lang: en-GB
title: LTE TC FAILRESTART-5
description: Failure of two ongoing alerts created by the CBC.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#failure-and-restart-indications'
- text: 'FAILRESTART-5'
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

# **FAILRESTART-5** Failure of two ongoing alerts created by the CBC

## Description

The MME reports a Cell broadcast failure in one or more cells in which 
there are two active alerts that were created by the CBC that receives 
the failure message. 

## Pre-requisites

* Dispose the conditions for the currently running broadcast to fail in one 
  or more cells of the alerting area.

::: tip
A possible way to execute this test case in a real LTE network is to block / 
disable, once the alert is running, cell broadcasting functionality in one or 
more of the eNBs by whatever means the eNB vendor provides for this.
:::

## Steps to execute

1. CBE sends two consecutive CAP Alert messages with:
   - A single *info* element. I.e. only one message in one language.
   - *alertinfo.language.code* set to the value of the local language for the 
     first alert and the value of an additional language for the second alert.
   - *alertinfo.instruction.text* content of the alert message in local 
     language for the first alert and in the selected additional language for
     the second alert.
   - Time information that allows the CBC to calculate the *repetition period*
     and the *number of repetitions*.
   - Same alert area that is controlled by a single MME. I.e. only one MME 
     needs to be involved in this test.

2. Trigger the condition to force the failure in one eNB.

## Information flow

<div style="text-align: center;">

![tc_lte_failrestart_5](/assets/img/flows/lte/failrestart/tc_lte_failrestart_5.svg)

</div>

## Result

Verify that:

1. The message sequence completes as shown in the flow above (note that there 
   might be additional WRITE REPLACE WARNING INDICATION messages if this 
   functionality is enabled).
2. The CBC detects that the failure messaged affects two active alerts and logs
   the relevant event information. 
3. If the CBC is configured to raise an alarm in this case, then an alarm is
   raised.
4. If the CBE - CBC interface provides the means for conveying information 
   about this type of failures, then the CBC sends this information to the CBE.
   this might occur separately for the two alerts.

