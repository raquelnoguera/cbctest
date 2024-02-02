---
lang: en-GB
title: LTE TC FAILRESTART-2
description: Failure during the start of an alert that affects all the cells of one or more eNBs.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#failure-and-restart-indications'
- text: 'FAILRESTART-2'
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

# **FAILRESTART-2** Failure during the start of an alert that affects all the cells of one or more eNBs

## Description

Cell broadcast fails in all the cells of an eNB upon starting the alert.

The affected eNB will not include a *Broadcast Completed Area List IE* in the
WRITE-REPLACE WARNING RESPONSE that it sends to the MME. The MME shall report 
back to the CBC that broadcast failed in this eNB.

## Pre-requisites

* Dispose the conditions for the broadcast to fail in all the cells of one
  eNB with cells covering the alert area.

::: tip
Two possible ways to execute this test case in a real LTE network are:

1. Block / disable cell broadcasting functionality in the eNB by whatever means
   the eNB vendor provides for this, or 
2. Start multiple cell broadcasting messages in parallel so the broacasting 
   resources are congested in all the cells of the eNB.
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

![tc_lte_failrestart_2](/assets/img/flows/lte/failrestart/tc_lte_failrestart_2.svg)

</div>

## Result

Verify that:

1. The message sequence completes as define in one of the two options shown in
   the flow above.
   Option 1 applies if indication messages are supported and enabled
   in the MME.
2. For option 1, flow 4.a includes a *Broadcast Empty Area List IE* that 
   includes the eNB ID of the eNB for which broadcast failed.
   
   For option 2, flow 4.b includes a *Failed Cell List IE* with the E-CGIs of
   all the cells in which the broadcast failed and a *Global eNB ID IE* with 
   the ID of the eNB that controls the cells in the aforementioned list.
3. The failure event is logged by the CBC.
3. If the CBC is configured to raise an alarm in this case, then an alarm is
   raised.
4. If the CBE - CBC interface provides the means for conveying information 
   about this type of failures, then the CBC sends this information to the CBE.
