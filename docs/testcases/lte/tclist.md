---
lang: en-GBthewe
title: LTE TCs
description: Test Cases for LTE.
---

# General

Unless otherwise explicitly stated inside a TC, the following checks should 
be done for all the TCs in this TS:

* Presence and values of all the mandatory parameters not explicitly mentioned
in the TC.
* Presence and values of all optional parameters not explicitly mentioned in 
the TC.

::: tip Note on "Optionality"
Some "OPTIONAL" parameters may become mandatory in a procedure based on 
specific conditions defined in 3GPP TS23.041 or TS29.168. I try to cover these
cases in the verification steps of TCs but **Always check the procedure in the 
standard to assert correctness**.
:::

* For all the WRITE-REPLACE WARNING REQUESTs sent by the CBC to MMEs, check
that the GS field inside the *Serial Number* IE contains the correct default
value.

::: tip Geographical Scope
The GS field indicates the area in which the message code is considered **new**.
This area could be *cell*, *PLMN* or *LA* (GSM) / *SA* (UMTS) / *TA* (LTE and 
5G). 

Section 9.4.1.2.1 of 3GPP TS23.041 defines the values that GS can take.

Value **01** should be used in general. This value indicates that the message
code has PLMN scope. However, MNOs may decide to set a different default value
for the GS field.
:::

* If the message contains a *message identifier*, then this identifier shall 
match the rules established for the country in which the CBC is deployed. 
Most commonly, these rules will be the ones described 
[here](/identifiers.html#message-identifiers).

# 3GPP Release

This test specification is "updated" to Rel17 regarding clarifications on 
procedures and presence of parameters. For example, a Note was added to section
9.3.32 of 3GPP TS23.041v16.4.0 to clarify that IE "Concurrent Warning Message 
Indicator" is always present in non-ETWS messages and not applicable for ETWS
messages.  

# Test cases for LTE

## Start Alert

* [**START-1**: Alert in local language without indication.](/testcases/lte/start/tc1/)
* [**START-2**: Alert in additional language without indication.](/testcases/lte/start/tc2/)
* [**START-3**: Alert in local language with indication.](/testcases/lte/start/tc3/)
* [**START-4**: Alert in additional language with indication.](/testcases/lte/start/tc4/)
* [**START-5**: Consecutive alerts with the same level and language. Both overlap in time and area.](/testcases/lte/start/tc5/)
* [**START-6**: Global alert in local language.](/testcases/lte/start/tc6/)
* [**START-7**: Global alert in additional language.](/testcases/lte/start/tc7/)
* [**START-8**: Unknown TAI in "List of TAIs" IE that contains a single TAI.](/testcases/lte/start/tc8/)
* [**START-9**: Unknown TAI in "List of TAIs" IE that contains multiple TAIs.](/testcases/lte/start/tc9/)
* [**START-10**: Broadcast failure in one eNB.](/testcases/lte/start/tc10/)
* [**START-11**: Broadcast Failure in several eNBs.](/testcases/lte/start/tc11/)
* [**START-12**: WRITE-REPLACE-WARNING Response not received or delayed. No MME pooling.](/testcases/lte/start/tc12/)
* [**START-13**: WRITE-REPLACE-WARNING Response not received or delayed. With MME pooling.](/testcases/lte/start/tc13/)

## Stop Alert

* [**STOP-1**: Stop, without indication, a time-limited alert in local language.](/testcases/lte/stop/tc1/)
* [**STOP-2**: Stop, without indication, a time-limited alert in additional language.](/testcases/lte/stop/tc2/)
* [**STOP-3**: Stop, with indication, a time-limited alert in local language.](/testcases/lte/stop/tc3/)
* [**STOP-4**: Stop, with indication, a time-limited alert in additional language.](/testcases/lte/stop/tc4/)
* [**STOP-5**: Stop, without indication, a continuous alert in local language.](/testcases/lte/stop/tc5/)
* [**STOP-6**: Stop, without indication, a continuous alert in additional language.](/testcases/lte/stop/tc6/)
* [**STOP-7**: Stop, with indication, a continuous alert in local language.](/testcases/lte/stop/tc7/)
* [**STOP-8**: Stop, with indication, a continuous alert in additional language.](/testcases/lte/stop/tc8/)
* [**STOP-9**: Partial stop of an active alert.](/testcases/lte/stop/tc9/)

## Update Alert

* [**UPDATE-1**: Update message of ongoing warning in local language. No indication.](/testcases/lte/update/tc1/)
* [**UPDATE-2**: Update message of ongoing warning in additional language. No indication.](/testcases/lte/update/tc2/)
* [**UPDATE-3**: Update message of ongoing warning in local language. With indication.](/testcases/lte/update/tc3/)
* [**UPDATE-4**: Update message of ongoing warning in additional language. With indication.](/testcases/lte/update/tc4/)
* [**UPDATE-5**: Update area of ongoing warning in local language. No indication.](/testcases/lte/update/tc5/)
* [**UPDATE-6**: Update area of ongoing warning in additional language. No indication.](/testcases/lte/update/tc6/)
* [**UPDATE-7**: Update area of ongoing warning in local language. With indication.](/testcases/lte/update/tc7/)
* [**UPDATE-8**: Update area of ongoing warning in additional language. With indication.](/testcases/lte/update/tc8/)
* [**UPDATE-9**: Update timing information of ongoing warning in local language. No indication.](/testcases/lte/update/tc9/)
* [**UPDATE-10**: Update timing information of ongoing warning in additional language. No indication.](/testcases/lte/update/tc10/)
* [**UPDATE-11**: Update timing information of ongoing warning in local language. With indication.](/testcases/lte/update/tc11/)
* [**UPDATE-12**: Update timing information of ongoing warning in additional language. With indication.](/testcases/lte/update/tc12/)

## Concurrency

* [**CONCURRENCY-1**: Alert received while an alert is active.](/testcases/lte/concurrency/tc1/)
* [**CONCURRENCY-2**: Stop active alert while two alerts are active.](/testcases/lte/concurrency/tc2/)
* [**CONCURRENCY-3**: Start and stop an alert in two languages at once in the same area.](/testcases/lte/concurrency/tc3/)
* [**CONCURRENCY-4**: Start and stop an alert in two languages at once in different areas.](/testcases/lte/concurrency/tc4/)
* [**CONCURRENCY-5**: Start and stop an alert in three languages at once in the same area.](/testcases/lte/concurrency/tc5/)
* [**CONCURRENCY-6**: Start an alert in three languages at once in the same area and stop one by one.](/testcases/lte/concurrency/tc6/)

## Failure and Restart Indications

* [**FAILRESTART-1**: Failure during the start of an alert that affects individual cells within eNBs.](/testcases/lte/failrestart/tc1/)
* [**FAILRESTART-2**: Failure during the start of an alert that affects all the cells of one or more eNBs.](/testcases/lte/failrestart/tc2/)
* [**FAILRESTART-3**: Failure indication affecting one ongoing alert managed by this CBC.](/testcases/lte/failrestart/tc3/)
* [**FAILRESTART-4**: Failure indication not affecting ongoing alerts managed by this CBC (affected alerts are managed by a peer CBC).](/testcases/lte/failrestart/tc4/)
* [**FAILRESTART-5**: Failure indication affecting two ongoing alerts managed by this CBC.](/testcases/lte/failrestart/tc5/)

## Error

* [**ERROR-1**: IE or IE group marked with "Reject IE" in WRITE-REPLACE WARNING REQUEST not comprehended.](/testcases/lte/error/tc1/)
* [**ERROR-2**: IE or IE group marked with "Reject IE" in STOP WARNING REQUEST not comprehended.](/testcases/lte/error/tc2/)
* [**ERROR-3**: IE or IE group marked with "Reject IE" in WRITE-REPLACE WARNING INDICATION not comprehended.](/testcases/lte/error/tc3/)
* [**ERROR-4**: IE or IE group marked with "Reject IE" in STOP WARNING INDICATION not comprehended.](/testcases/lte/error/tc4/)
* [**ERROR-5**: IE or IE group marked with "Reject IE" in PWS FAILURE INDICATION not comprehended.](/testcases/lte/error/tc5/)
* [**ERROR-6**: Unknown Tracking Area List not comprehended in WRITE-REPLACE WARNING RESPONSE.](/testcases/lte/error/tc6/)
* [**ERROR-7**: Unknown Tracking Area List not comprehended in STOP WARNING RESPONSE.](/testcases/lte/error/tc7/)
* [**ERROR-8**: Broadcast Scheduled Area List IE not comprehended in WRITE-REPLACE WARNING INDICATION](/testcases/lte/error/tc8/)
* [**ERROR-9**: Broadcast Empty Area List IE not comprehended in STOP WARNING INDICATION](/testcases/lte/error/tc9/)

## Timeout

* [**TIMEOUT-1**: Timer expiry for WRITE REPLACE WARNING procedure.](/testcases/lte/timeout/tc1/)
* [**TIMEOUT-2**: Timer expiry for STOP WARNING procedure.](/testcases/lte/timeout/tc2/)
