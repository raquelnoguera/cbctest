---
lang: en-GB
title: LTE TC FAILRESTART-1
description: Failure during the start of an alert that affects individual cells within eNBs.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#failure-and-restart-indications'
- text: 'FAILRESTART-1'
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

# **FAILRESTART-1** Failure during the start of an alert that affects individual cells within eNBs

## Description

Cell broadcast fails in one cell of an eNB upon starting the alert. The alert
starts correctly in other cells of the same eNB.

The affected eNB will provide to the MME the list of cells in which the 
broadcast is running. The MME compares this list with the one sent and checks
for missing cells. The MME reports back to the CBC the list of eNBs that failed
broadcast the message in all their cells.

::: warning Reported list in failure message 
This TC is tricky and the outcome is likely to be specific to each MME 
implementation.
The standard provides two methods for the MME to inform about failures in 
cell broadcasting in eNBs:

1. WRITE-REPLACE WARNING INDICATION
   
   If indication messages are enabled for CBS, then the MME shall report the 
   list of eNBs that fail to broadcast in **ALL** their cells. This method 
   provides **eNB level** granularity. 
   
   In principle, this does not cover the case of this TC, in which the eNB 
   activates broadcast in some cells but fails to activate in others (e.g. a 3
   sectors eNB requested to broadcast in all the sectors but can only start the 
   broadcast in two and fails in the third one).
2. FAILURE INDICATION
   
   This method provides **cell level** granularity. The MME can use this method
   to cover the cases of this TC in which an eNB activates broadcast in some 
   cells but fails to activate it in other cells. 
:::

## Pre-requisites

* Define an alert area that includes at least two cells controlled by the same
  eNB. It may include cells in other eNBs as well.
* Dispose the conditions for the broadcast to fail in one cell of the eNB
  that controls at least two cells of the alert area.

::: tip
A possible way to execute this test case in a real LTE network is to congest 
the broadcasting resources of one cell by having multiple messages broadcasted 
in parallel in this cell.
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

## Information flow

<div style="text-align: center;">

![tc_lte_failrestart_1](/assets/img/flows/lte/failrestart/tc_lte_failrestart_1.svg)

</div>

## Result

Verify that:

1. The message sequence completes as one of the two options shown in the 
   flow above.
   Option 1 is only possible if indication messages are supported and enabled
   in the MME.
2. The failure event is logged by the CBC.
3. If the CBC is configured to raise an alarm in this case, then an alarm is
   raised.
4. If the CBE - CBC interface provides the means for conveying information 
   about this type of failures, then the CBC sends this information to the CBE.
