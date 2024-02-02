---
lang: en-GB
title: LTE TC START-5
description: Message codes of consecutive alerts with the same message identifier. Both alerts overlap in time and geographical area.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#start-alert'
- text: 'START-5'
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

# **START-5** Message codes of consecutive alerts with the same message identifier and that overlap in area and time

## Description

This TC is **only** applicable if the CBC supports sending multiple alerts of 
the same level being broadcasted at the same time.

Since the two alerts have the same level (e.g. they are both EU-Alert level 2)
and are in the same language, they will have the same message identifier. Also, 
the *GS* and *Update Number* fields of the *Serial Number* will be the same, 
since the second alert is NOT updating the first one but it is a completely new
one. The only way for the two alerts to have different 
[*message references*](/identifiers.md#message-reference) in the overlapping 
area is for the CBC to use different values of their *Message Code* field 
inside the *Serial Number*.

Verify that message codes inside the serial number change from one independent alert to 
the next one that has the same message identifier.

## Pre-requisites

* There is no ongoing cell broadcast in any of the cells that cover the alert area.
* The messages for the two alerts are either both in the local language or both in 
  the same or different non-local language (different iterations of this TC).
* Alert timing defined for the two alerts are defined so they overlap.
* Same alert area for both alerts. 

## Steps to execute

1. CBE sends CAP Alert message with:
   - A single *info* element. I.e. only one message in one language.
   - *alertinfo.language.code* set to the value of the language applicable to 
     the current iteration of this test case (e.g. sl-SI for Slovenian).
   - *alertinfo.instruction.text* content of the alert message in the language 
     of the code above. The message of this message should be such that it 
     needs four [pages](/introduction.html#cell-broadcast-message) when 
     encoded.
   - Time information that allows the CBC to calculate the *repetition period*
     and the *number of repetitions* in a way that overlaps with the next 
     alert.
   - Alert area that is inside the area controlled by a single MME. I.e.
     only one MME is involved in this test.
2. Wait for the alert in step one to become active.
3. CBE sends CAP Alert message with:
   - A single *info* element. I.e. only one message in one language.
   - *alertinfo.language.code* set to the value of the language applicable to 
     the current iteration of this test case .
   - *alertinfo.instruction.text* content of the alert message in the language 
     of the code above.
   - Time information that allows the CBC to calculate the *repetition period*
     and the *number of repetitions* in a way that overlaps with the previous 
     alert.
   - Same alert area as in step 1.

## Information flow

<div style="text-align: center;">

![tc_lte_start_5](/assets/img/flows/lte/start/tc_lte_start_5.svg)

</div>

## Result

Verify that:

1. The values of the **message code** field inside the *Serial Number* IE of 
   the WRITE-REPLACE-WARNING-REQUEST in flows 2 and 5 are different.
2. Both alerts are broadcasted simultaneously while they are both active.
3. Handsets in the alert area receive and display the alerts correctly.

## Iterations

This TC should be iterated for the alert types and language combinations in the
following table that are applicable in the country in which the CBC is 
deployed:

| Iteration | Alert Type | Language | Message identifier |
|:---:| ------------ |:----:|:------------------:|
| 1 | EU-Alert Level 1 \ WEA Presidential | Local | 4370 (0x1112) |
| 2 | EU-Alert Level 2 \ WEA Extreme | Local | [4371, 4372] ([0x1113, 0x1114]) |
| 3 | EU-Alert Level 3 \ WEA Severe | Local | [4373 ... 4378] ([0x1115 ... 0x111A) |
| 4 | EU-Alert & WEA AMBER | Local | 4379 (0x111B) |
| 5 | WEA RMT | Local | 4380 (0x111C) |
| 6 | WEA Exercise | Local | 4381 (0x111D) |
| 7 | WEA Operator defined use | Local | 4382 (0x111E) |
| 8 | EU-Alert Level 4 \ WEA Public Safety | Local | 4396 (0x112C) |
| 9 | WEA State/Local test | Local | 4398 (0x112E) |
| 10 | EU-Info | Local | 6400 (0x1900) |
| 11 | EU-Alert Level 1 \ WEA Presidential | Same Additional | 4383 (0x111F) |
| 12 | EU-Alert Level 2 \ WEA Extreme | Same Additional | [4384, 4385] ([0x1120, 0x1121]) |
| 13 | EU-Alert Level 3 \ WEA Severe | Same Additional | [4386 ... 4391] ([0x1122 ... 0x1127) |
| 14 | EU-Alert & WEA AMBER | Same Additional | 4392 (0x1128) |
| 15 | WEA RMT | Same Additional | 4393 (0x1129) |
| 16 | WEA Exercise | Same Additional | 4394 (0x112A) |
| 17 | WEA Operator defined use | Same Additional | 4395 (0x112B) |
| 18 | EU-Alert Level 4 \ WEA Public Safety | Same Additional | 4397 (0x112D) |
| 19 | WEA State/Local test | Same Additional | 4399 (0x112F) |
| 20 | EU-Alert Level 1 \ WEA Presidential | Different Additional | 4383 (0x111F) |
| 21 | EU-Alert Level 2 \ WEA Extreme | Different Additional | [4384, 4385] ([0x1120, 0x1121]) |
| 22 | EU-Alert Level 3 \ WEA Severe | Different Additional | [4386 ... 4391] ([0x1122 ... 0x1127) |
| 23 | EU-Alert & WEA AMBER | Different Additional | 4392 (0x1128) |
| 24 | WEA RMT | Different Additional | 4393 (0x1129) |
| 25 | WEA Exercise | Different Additional | 4394 (0x112A) |
| 26 | WEA Operator defined use | Different Additional | 4395 (0x112B) |
| 27 | EU-Alert Level 4 \ WEA Public Safety | Different Additional | 4397 (0x112D) |
| 28 | WEA State/Local test | Different Additional | 4399 (0x112F) |

::: tip
**Note** that there are iterations for the same and for different *additional 
languages*.<br> If, for example, English and German are non-local languages 
used in alerts in your region, then for iterations with the *same additional*, 
send the two alerts in English or the two alerts in German, and for iterations 
with *different additionals*, send one alert in English and one in German. 
:::