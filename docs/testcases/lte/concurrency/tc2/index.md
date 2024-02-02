---
lang: en-GB
title: LTE TC CONCURRENCY-2
description: Stop active alert while two alerts are active.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#concurrency'
- text: 'CONCURRENCY-2'
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

# **CONCURRENCY-2** Stop active alert while two alerts are active.

## Description

When two independent alerts are active in the same area. Stopping one shall not
affect the other. 

## Pre-requisites

* There is no ongoing cell broadcast in the CBC.

## Steps to execute

1. Activate alerts 1 and 2 independently in the same area.
2. While the two alerts are running, cancel alert 1.

## Information flow

<div style="text-align: center;">

![tc_lte_concurrency_2](/assets/img/flows/lte/concurrency/tc_lte_concurrency_2.svg)

</div>

## Result

Verify that:

1. The flow of messages matches the one above.
2. A handset that enters (or is powered up) the alert area after step 1 
   receives both alerts.
3. A handset that enters the alert area after step 2 only receives alert 2.

## Iterations

This TC should be iterated for all the applicable combinations of alert types 
and languages in the region where the CBC is deployed:

| Iteration | Alert 1 Type | Alert 2 Type | 
|:---------:|:------------:|:------------:|
| 1 | EU-L1 \ WEA Pres | EU-L1 \ WEA Pres |
| 2 | EU-L1 \ WEA Pres | EU-L2 \ WEA Ext |
| 3 | EU-L1 \ WEA Pres | EU-L3 \ WEA Sev |
| 4 | EU-L1 \ WEA Pres | EU & WEA AMBER |
| 5 | EU-L1 \ WEA Pres | WEA RMT |
| 6 | EU-L1 \ WEA Pres | WEA Exercise |
| 7 | EU-L1 \ WEA Pres | WEA Operator defined use |
| 8 | EU-L1 \ WEA Pres | EU-L4 \ WEA Public Safety |
| 9 | EU-L1 \ WEA Pres | WEA State/Local test |
| 10 | EU-L1 \ WEA Pres | EU-Info |
| 11 | EU-L2 \ WEA Ext | EU-L1 \ WEA Pres |
| 12 | EU-L2 \ WEA Ext | EU-L2 \ WEA Ext |
| 13 | EU-L2 \ WEA Ext | EU-L3 \ WEA Sev |
| 14 | EU-L2 \ WEA Ext | EU & WEA AMBER |
| 15 | EU-L2 \ WEA Ext | WEA RMT |
| 16 | EU-L2 \ WEA Ext | WEA Exercise |
| 17 | EU-L2 \ WEA Ext | WEA Operator defined use |
| 18 | EU-L2 \ WEA Ext | EU-L4 \ WEA Public Safety |
| 19 | EU-L2 \ WEA Ext | WEA State/Local test |
| 20 | EU-L2 \ WEA Ext | EU-Info |
| 21 | EU-L3 \ WEA Sev | EU-L1 \ WEA Pres |
| 22 | EU-L3 \ WEA Sev | EU-L2 \ WEA Ext |
| 23 | EU-L3 \ WEA Sev | EU-L3 \ WEA Sev |
| 24 | EU-L3 \ WEA Sev | EU & WEA AMBER |
| 25 | EU-L3 \ WEA Sev | WEA RMT |
| 26 | EU-L3 \ WEA Sev | WEA Exercise |
| 27 | EU-L3 \ WEA Sev | WEA Operator defined use |
| 28 | EU-L3 \ WEA Sev | EU-L4 \ WEA Public Safety |
| 29 | EU-L3 \ WEA Sev | WEA State/Local test |
| 30 | EU-L3 \ WEA Sev | EU-Info |
| 31 | EU & WEA AMBER | EU-L1 \ WEA Pres |
| 32 | EU & WEA AMBER | EU-L2 \ WEA Ext |
| 33 | EU & WEA AMBER | EU-L3 \ WEA Sev |
| 34 | EU & WEA AMBER | EU & WEA AMBER |
| 35 | EU & WEA AMBER | WEA RMT |
| 36 | EU & WEA AMBER | WEA Exercise |
| 37 | EU & WEA AMBER | WEA Operator defined use |
| 38 | EU & WEA AMBER | EU-L4 \ WEA Public Safety |
| 39 | EU & WEA AMBER | WEA State/Local test |
| 40 | EU & WEA AMBER | EU-Info |
| 41 | WEA RMT | EU-L1 \ WEA Pres |
| 42 | WEA RMT | EU-L2 \ WEA Ext |
| 43 | WEA RMT | EU-L3 \ WEA Sev |
| 44 | WEA RMT | EU & WEA AMBER |
| 45 | WEA RMT | WEA RMT |
| 46 | WEA RMT | WEA Exercise |
| 47 | WEA RMT | WEA Operator defined use |
| 48 | WEA RMT | EU-L4 \ WEA Public Safety |
| 49 | WEA RMT | WEA State/Local test |
| 50 | WEA RMT | EU-Info |
| 51 | WEA Exercise | EU-L1 \ WEA Pres | Local |
| 52 | WEA Exercise | EU-L2 \ WEA Ext | Local |
| 53 | WEA Exercise | EU-L3 \ WEA Sev | Local |
| 54 | WEA Exercise | EU & WEA AMBER | Local |
| 55 | WEA Exercise | WEA RMT | Local |
| 56 | WEA Exercise | WEA Exercise | Local |
| 57 | WEA Exercise | WEA Operator defined use | Local |
| 58 | WEA Exercise | EU-L4 \ WEA Public Safety | Local |
| 59 | WEA Exercise | WEA State/Local test | Local |
| 60 | WEA Exercise | EU-Info | Local |
| 61 | WEA Operator defined use | EU-L1 \ WEA Pres |
| 62 | WEA Operator defined use | EU-L2 \ WEA Ext |
| 63 | WEA Operator defined use | EU-L3 \ WEA Sev |
| 64 | WEA Operator defined use | EU & WEA AMBER |
| 65 | WEA Operator defined use | WEA RMT |
| 66 | WEA Operator defined use | WEA Exercise |
| 67 | WEA Operator defined use | WEA Operator defined use |
| 68 | WEA Operator defined use | EU-L4 \ WEA Public Safety |
| 69 | WEA Operator defined use | WEA State/Local test |
| 70 | WEA Operator defined use | EU-Info |
| 71 | EU-L4 \ WEA Public Safety | EU-L1 \ WEA Pres |
| 72 | EU-L4 \ WEA Public Safety | EU-L2 \ WEA Ext |
| 73 | EU-L4 \ WEA Public Safety | EU-L3 \ WEA Sev |
| 74 | EU-L4 \ WEA Public Safety | EU & WEA AMBER |
| 75 | EU-L4 \ WEA Public Safety | WEA RMT |
| 76 | EU-L4 \ WEA Public Safety | WEA Exercise |
| 77 | EU-L4 \ WEA Public Safety | WEA Operator defined use |
| 78 | EU-L4 \ WEA Public Safety | EU-L4 \ WEA Public Safety |
| 79 | EU-L4 \ WEA Public Safety | WEA State/Local test |
| 80 | EU-L4 \ WEA Public Safety | EU-Info |
| 81 | WEA State/Local test | EU-L1 \ WEA Pres |
| 82 | WEA State/Local test | EU-L2 \ WEA Ext |
| 83 | WEA State/Local test | EU-L3 \ WEA Sev |
| 84 | WEA State/Local test | EU & WEA AMBER |
| 85 | WEA State/Local test | WEA RMT |
| 86 | WEA State/Local test | WEA Exercise |
| 87 | WEA State/Local test | WEA Operator defined use |
| 88 | WEA State/Local test | EU-L4 \ WEA Public Safety |
| 89 | WEA State/Local test | WEA State/Local test |
| 90 | WEA State/Local test | EU-Info |
| 91 | EU-Info | EU-L1 \ WEA Pres |
| 92 | EU-Info | EU-L2 \ WEA Ext |
| 93 | EU-Info | EU-L3 \ WEA Sev |
| 94 | EU-Info | EU & WEA AMBER |
| 95 | EU-Info | WEA RMT |
| 96 | EU-Info | WEA Exercise |
| 97 | EU-Info | WEA Operator defined use |
| 98 | EU-Info | EU-L4 \ WEA Public Safety |
| 99 | EU-Info | WEA State/Local test |
| 100 | EU-Info | EU-Info |

