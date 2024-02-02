---
lang: en-GB
title: LTE TC CONCURRENCY-4
description: Start and Stop simultaneously an alert in local and one additional language in different areas.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#concurency'
- text: 'CONCURRENCY-4'
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

# **CONCURRENCY-4** Start and Stop simultaneously an alert in local and one additional language in different areas.

## Description

Processing a request from the CBE to start alerting in the local and one
additional language at the same time in different areas. The areas migh 
partially overlap in any way, but shall not be identical.

## Pre-requisites

* There is no ongoing cell broadcast in the CBC.

## Steps to execute

1. CBE sends CAP Alert message with:
   - Two *info* elements. One containing the message in the local language and
     another one containing the message in another language.
   - for each info element, the *alertinfo.language.code* is set to the value 
     of the language used.
   - for each info element, the *alertinfo.instruction.text* content is in the 
     language selected for this message.
   - The timing information that the CBC uses to calculate the *repetition 
     period* and the *number of repetitions* is the same for the messages in
     the two languages.
   - The alert area of the two *info* elements can overlap but it shall **NOT**
     be the same.
2. When the alerts have been running for 2 periods or more, the CBE sends CAP 
   Cancel message with:
   - a *references* sub-element inside the *alert* element that includes the 
     message identifier of the CAP Alert message of step 1 above.

## Information flow

<div style="text-align: center;">

![tc_lte_concurrency_4](/assets/img/flows/lte/concurrency/tc_lte_concurrency_4.svg)

</div>

## Result

Verify that:

1. For each alert inside flow 1,tThe CBC selects all the cells that meet the 
   configured selection criteria for that alert.
2. The CBC sends two WRITE-REPLACE WARNING REQUESTs to each MME involved. 
   Presence of parameters in this message shall be as shown in the following 
   table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/concurrency/tc4/#iterations) |
   | **Serial Number** | Yes | |
   | **List of TAIs** | Should | TAI of the cells in IE **Warning Area List** |
   | **Warning Area List** | Yes | List of cells that cover the specific alert area |
   | **Repetition Period** | Yes | According to the timing requested in flow 1 |
   | **Extended Repetition Period** | No | |
   | **Number of Broadcast Requested** | Yes | According to the timing requested in flow 1 |
   | **Warning Type** | No | |
   | **Warning Security Information** | No | |
   | **Data Coding Scheme** | Yes | Set for local language according to 3GPP TS 23.038 |
   | **Warning Message Contents** | Yes | Alert message encoded according to the value of DCS above |
   | **Concurrent Warning Message Indicator** | Yes | true |
   | **Send Write-Replace-Warning-Indication** | May |
   | **Global eNB ID** | No |

3. WRITE-REPLACE WARNING RESPONSEs are received to flow 2 from all the MME 
   involved. These responses have the following contents:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in flow 2 |
   | **Serial Number** | Yes | Same as in flow 2 |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | No | |

4. Handsets in each alert area receive the alert active in that area. In 
   overlapping areas the handsets receive both languages and display
   them correctly.

5. After receiving the CAP Cancel message from the CBE, the CBC sends two STOP 
   WARNING Requests to each MME involved. Presence of parameters in this 
   message shall be as shown in the following table:

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | [for current iteration](/testcases/lte/concurrency/tc4/#iterations) |
   | **Serial Number** | Yes | Same as in corresponding flow 2 |
   | **List of TAIs** | May | TAI of the cells in IE **Warning Area List** |
   | **Warning Area List** | May | List of cells that cover the alert area |
   | **Send Stop Warning Indication** | May |  |
   | **Stop All Indication** | No |  |

6. For each SWReq received, each MME responds with a STOP WARNING RESPONSE with
   contents according to the following table.

   | Information Element | Included | Value |
   | ------------------- | -------- | ----- |
   | **Message Identifier** | Yes | Same as in corresponding flow 5 |
   | **Serial Number** | Yes | Same as in flow corresponding 5 |
   | **Cause** | Yes | Set to value *Message accepted* |
   | **Criticality Diagnostics** | No | |
   | **Unknown Tracking Area List** | No | |

7. Broadcasting of the message has stopped in all the cells within the alerting
   area. Any handset, which had not received the messages, that enters the 
   alert area shall not show any alert. 

## Iterations

This TC should be iterated for the alert types in the following table that are 
applicable in the country in which the CBC is deployed:

| Iteration | Alert Type |
|:---:| ------------ |
| 1 | EU-Alert Level 1 \ WEA Presidential |
| 2 | EU-Alert Level 2 \ WEA Extreme |
| 3 | EU-Alert Level 3 \ WEA Severe |
| 4 | EU-Alert & WEA AMBER |
| 5 | WEA RMT |
| 6 | WEA Exercise |
| 7 | WEA Operator defined use |
| 8 | EU-Alert Level 4 \ WEA Public Safety |
| 9 | WEA State/Local test |

