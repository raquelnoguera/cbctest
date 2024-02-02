---
lang: en-GB
title: LTE TC CONCURRENCY-1
description: Alert requested while another one is active.
sidebar:
- text: '<< Back to List of TCs'
  link: '/testcases/lte/tclist.md#concurrency'
- text: 'CONCURRENCY-1'
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

# **CONCURRENCY-1** Alert requested while another one is active.

## Description

Concurrent broadcast of two completely independent alerts with overlapping 
areas.

## Pre-requisites

* There is no ongoing cell broadcast in the network.

## Steps to execute

1. CBE activates alert 1 by sending a CAP Alert message with a single *info* 
   field. The language of this message should be according to the iteration
   of this TC being executed. The content of the message shall be in the 
   language selected. The length of this message should be such that it 
   needs four [pages](/introduction.html#cell-broadcast-message) when 
   encoded.
2. Once alert 1 has been activated, the CBE activates alert 2 by sending 
   another CAP Alert message with a single *info* field. The language of this 
   message should be according to the iteration of this TC being executed. The 
   content of the message shall be in the language selected. The alert area of
   this message shall overlap with that or alert 1.

## Information flow

<div style="text-align: center;">

![tc_lte_concurrency_1](/assets/img/flows/lte/concurrency/tc_lte_concurrency_1.svg)

</div>

## Result

Verify that:

1. The flow of messages matches the one above. The correct message indetifiers
   are used in flows 1.2 and 2.2 according to [this table](/identifiers.md#message-identifiers).
2. A handset that is in the overlapping alert areas when the alerts are 
   activated receives both alerts.
3. A handset that enters (or is powered up) in the overlapping alert while both
   alert are active receives the two alerts.
4. The alert messages are correctly displayed in the languages selected for the
   current iteration of this TC.

## Iterations

This TC should be iterated for all the applicable combinations of alert types 
and languages in the region where the CBC is deployed:

| Iteration | Alert 1 Type | Alert 1 Lang | Alert 2 Type | Alert 2 Lang |
|:---:| ------------ |:------------------:| ------------------ |:------------------:|
| 1 | EU-L1 \ WEA Pres | Local | EU-L1 \ WEA Pres | Local |
| 2 | EU-L1 \ WEA Pres | Local | EU-L2 \ WEA Ext | Local |
| 3 | EU-L1 \ WEA Pres | Local | EU-L3 \ WEA Sev | Local |
| 4 | EU-L1 \ WEA Pres | Local | EU & WEA AMBER | Local |
| 5 | EU-L1 \ WEA Pres | Local | WEA RMT | Local |
| 6 | EU-L1 \ WEA Pres | Local | WEA Exercise | Local |
| 7 | EU-L1 \ WEA Pres | Local | WEA Operator defined use | Local |
| 8 | EU-L1 \ WEA Pres | Local | EU-L4 \ WEA Public Safety | Local |
| 9 | EU-L1 \ WEA Pres | Local | WEA State/Local test | Local |
| 10 | EU-L1 \ WEA Pres | Local | EU-Info | Local |
| 11 | EU-L1 \ WEA Pres | Local | EU-L1 \ WEA Pres | Additional |
| 12 | EU-L1 \ WEA Pres | Local | EU-L2 \ WEA Ext | Additional |
| 13 | EU-L1 \ WEA Pres | Local | EU-L3 \ WEA Sev | Additional |
| 14 | EU-L1 \ WEA Pres | Local | EU & WEA AMBER | Additional |
| 15 | EU-L1 \ WEA Pres | Local | WEA RMT | Additional |
| 16 | EU-L1 \ WEA Pres | Local | WEA Exercise | Additional |
| 17 | EU-L1 \ WEA Pres | Local | WEA Operator defined use | Additional |
| 18 | EU-L1 \ WEA Pres | Local | EU-L4 \ WEA Public Safety | Additional |
| 19 | EU-L1 \ WEA Pres | Local | WEA State/Local test | Additional |
| 20 | EU-L1 \ WEA Pres | Additional | EU-L1 \ WEA Pres | Local |
| 21 | EU-L1 \ WEA Pres | Additional | EU-L2 \ WEA Ext | Local |
| 22 | EU-L1 \ WEA Pres | Additional | EU-L3 \ WEA Sev | Local |
| 23 | EU-L1 \ WEA Pres | Additional | EU & WEA AMBER | Local |
| 24 | EU-L1 \ WEA Pres | Additional | WEA RMT | Local |
| 25 | EU-L1 \ WEA Pres | Additional | WEA Exercise | Local |
| 26 | EU-L1 \ WEA Pres | Additional | WEA Operator defined use | Local |
| 27 | EU-L1 \ WEA Pres | Additional | EU-L4 \ WEA Public Safety | Local |
| 28 | EU-L1 \ WEA Pres | Additional | WEA State/Local test | Local |
| 29 | EU-L1 \ WEA Pres | Additional | EU-Info | Local |
| 30 | EU-L1 \ WEA Pres | Additional | EU-L1 \ WEA Pres | Additional |
| 31 | EU-L1 \ WEA Pres | Additional | EU-L2 \ WEA Ext | Additional |
| 32 | EU-L1 \ WEA Pres | Additional | EU-L3 \ WEA Sev | Additional |
| 33 | EU-L1 \ WEA Pres | Additional | EU & WEA AMBER | Additional |
| 34 | EU-L1 \ WEA Pres | Additional | WEA RMT | Additional |
| 35 | EU-L1 \ WEA Pres | Additional | WEA Exercise | Additional |
| 36 | EU-L1 \ WEA Pres | Additional | WEA Operator defined use | Additional |
| 37 | EU-L1 \ WEA Pres | Additional | EU-L4 \ WEA Public Safety | Additional |
| 38 | EU-L1 \ WEA Pres | Additional | WEA State/Local test | Additional |
| 39 | EU-L2 \ WEA Ext | Local | EU-L1 \ WEA Pres | Local |
| 40 | EU-L2 \ WEA Ext | Local | EU-L2 \ WEA Ext | Local |
| 41 | EU-L2 \ WEA Ext | Local | EU-L3 \ WEA Sev | Local |
| 42 | EU-L2 \ WEA Ext | Local | EU & WEA AMBER | Local |
| 43 | EU-L2 \ WEA Ext | Local | WEA RMT | Local |
| 44 | EU-L2 \ WEA Ext | Local | WEA Exercise | Local |
| 45 | EU-L2 \ WEA Ext | Local | WEA Operator defined use | Local |
| 46 | EU-L2 \ WEA Ext | Local | EU-L4 \ WEA Public Safety | Local |
| 47 | EU-L2 \ WEA Ext | Local | WEA State/Local test | Local |
| 48 | EU-L2 \ WEA Ext | Local | EU-Info | Local |
| 49 | EU-L2 \ WEA Ext | Local | EU-L1 \ WEA Pres | Additional |
| 50 | EU-L2 \ WEA Ext | Local | EU-L2 \ WEA Ext | Additional |
| 51 | EU-L2 \ WEA Ext | Local | EU-L3 \ WEA Sev | Additional |
| 52 | EU-L2 \ WEA Ext | Local | EU & WEA AMBER | Additional |
| 53 | EU-L2 \ WEA Ext | Local | WEA RMT | Additional |
| 54 | EU-L2 \ WEA Ext | Local | WEA Exercise | Additional |
| 55 | EU-L2 \ WEA Ext | Local | WEA Operator defined use | Additional |
| 56 | EU-L2 \ WEA Ext | Local | EU-L4 \ WEA Public Safety | Additional |
| 57 | EU-L2 \ WEA Ext | Local | WEA State/Local test | Additional |
| 58 | EU-L2 \ WEA Ext | Additional | EU-L1 \ WEA Pres | Local |
| 59 | EU-L2 \ WEA Ext | Additional | EU-L2 \ WEA Ext | Local |
| 60 | EU-L2 \ WEA Ext | Additional | EU-L3 \ WEA Sev | Local |
| 61 | EU-L2 \ WEA Ext | Additional | EU & WEA AMBER | Local |
| 62 | EU-L2 \ WEA Ext | Additional | WEA RMT | Local |
| 63 | EU-L2 \ WEA Ext | Additional | WEA Exercise | Local |
| 64 | EU-L2 \ WEA Ext | Additional | WEA Operator defined use | Local |
| 65 | EU-L2 \ WEA Ext | Additional | EU-L4 \ WEA Public Safety | Local |
| 66 | EU-L2 \ WEA Ext | Additional | WEA State/Local test | Local |
| 67 | EU-L2 \ WEA Ext | Additional | EU-Info | Local |
| 68 | EU-L2 \ WEA Ext | Additional | EU-L1 \ WEA Pres | Additional |
| 69 | EU-L2 \ WEA Ext | Additional | EU-L2 \ WEA Ext | Additional |
| 70 | EU-L2 \ WEA Ext | Additional | EU-L3 \ WEA Sev | Additional |
| 71 | EU-L2 \ WEA Ext | Additional | EU & WEA AMBER | Additional |
| 72 | EU-L2 \ WEA Ext | Additional | WEA RMT | Additional |
| 73 | EU-L2 \ WEA Ext | Additional | WEA Exercise | Additional |
| 74 | EU-L2 \ WEA Ext | Additional | WEA Operator defined use | Additional |
| 75 | EU-L2 \ WEA Ext | Additional | EU-L4 \ WEA Public Safety | Additional |
| 76 | EU-L2 \ WEA Ext | Additional | WEA State/Local test | Additional |
| 77 | EU-L3 \ WEA Sev | Local | EU-L1 \ WEA Pres | Local |
| 78 | EU-L3 \ WEA Sev | Local | EU-L2 \ WEA Ext | Local |
| 79 | EU-L3 \ WEA Sev | Local | EU-L3 \ WEA Sev | Local |
| 80 | EU-L3 \ WEA Sev | Local | EU & WEA AMBER | Local |
| 81 | EU-L3 \ WEA Sev | Local | WEA RMT | Local |
| 82 | EU-L3 \ WEA Sev | Local | WEA Exercise | Local |
| 83 | EU-L3 \ WEA Sev | Local | WEA Operator defined use | Local |
| 84 | EU-L3 \ WEA Sev | Local | EU-L4 \ WEA Public Safety | Local |
| 85 | EU-L3 \ WEA Sev | Local | WEA State/Local test | Local |
| 86 | EU-L3 \ WEA Sev | Local | EU-Info | Local |
| 87 | EU-L3 \ WEA Sev | Local | EU-L1 \ WEA Pres | Additional |
| 88 | EU-L3 \ WEA Sev | Local | EU-L2 \ WEA Ext | Additional |
| 89 | EU-L3 \ WEA Sev | Local | EU-L3 \ WEA Sev | Additional |
| 90 | EU-L3 \ WEA Sev | Local | EU & WEA AMBER | Additional |
| 91 | EU-L3 \ WEA Sev | Local | WEA RMT | Additional |
| 92 | EU-L3 \ WEA Sev | Local | WEA Exercise | Additional |
| 93 | EU-L3 \ WEA Sev | Local | WEA Operator defined use | Additional |
| 94 | EU-L3 \ WEA Sev | Local | EU-L4 \ WEA Public Safety | Additional |
| 95 | EU-L3 \ WEA Sev | Local | WEA State/Local test | Additional |
| 96 | EU-L3 \ WEA Sev | Additional | EU-L1 \ WEA Pres | Local |
| 97 | EU-L3 \ WEA Sev | Additional | EU-L2 \ WEA Ext | Local |
| 98 | EU-L3 \ WEA Sev | Additional | EU-L3 \ WEA Sev | Local |
| 99 | EU-L3 \ WEA Sev | Additional | EU & WEA AMBER | Local |
| 100 | EU-L3 \ WEA Sev | Additional | WEA RMT | Local |
| 101 | EU-L3 \ WEA Sev | Additional | WEA Exercise | Local |
| 102 | EU-L3 \ WEA Sev | Additional | WEA Operator defined use | Local |
| 103 | EU-L3 \ WEA Sev | Additional | EU-L4 \ WEA Public Safety | Local |
| 104 | EU-L3 \ WEA Sev | Additional | WEA State/Local test | Local |
| 105 | EU-L3 \ WEA Sev | Additional | EU-Info | Local |
| 106 | EU-L3 \ WEA Sev | Additional | EU-L1 \ WEA Pres | Additional |
| 107 | EU-L3 \ WEA Sev | Additional | EU-L2 \ WEA Ext | Additional |
| 108 | EU-L3 \ WEA Sev | Additional | EU-L3 \ WEA Sev | Additional |
| 109 | EU-L3 \ WEA Sev | Additional | EU & WEA AMBER | Additional |
| 110 | EU-L3 \ WEA Sev | Additional | WEA RMT | Additional |
| 111 | EU-L3 \ WEA Sev | Additional | WEA Exercise | Additional |
| 112 | EU-L3 \ WEA Sev | Additional | WEA Operator defined use | Additional |
| 113 | EU-L3 \ WEA Sev | Additional | EU-L4 \ WEA Public Safety | Additional |
| 114 | EU-L3 \ WEA Sev | Additional | WEA State/Local test | Additional |
| 115 | EU & WEA AMBER | Local | EU-L1 \ WEA Pres | Local |
| 116 | EU & WEA AMBER | Local | EU-L2 \ WEA Ext | Local |
| 117 | EU & WEA AMBER | Local | EU-L3 \ WEA Sev | Local |
| 118 | EU & WEA AMBER | Local | EU & WEA AMBER | Local |
| 119 | EU & WEA AMBER | Local | WEA RMT | Local |
| 120 | EU & WEA AMBER | Local | WEA Exercise | Local |
| 121 | EU & WEA AMBER | Local | WEA Operator defined use | Local |
| 122 | EU & WEA AMBER | Local | EU-L4 \ WEA Public Safety | Local |
| 123 | EU & WEA AMBER | Local | WEA State/Local test | Local |
| 124 | EU & WEA AMBER | Local | EU-Info | Local |
| 125 | EU & WEA AMBER | Local | EU-L1 \ WEA Pres | Additional |
| 126 | EU & WEA AMBER | Local | EU-L2 \ WEA Ext | Additional |
| 127 | EU & WEA AMBER | Local | EU-L3 \ WEA Sev | Additional |
| 128 | EU & WEA AMBER | Local | EU & WEA AMBER | Additional |
| 129 | EU & WEA AMBER | Local | WEA RMT | Additional |
| 130 | EU & WEA AMBER | Local | WEA Exercise | Additional |
| 131 | EU & WEA AMBER | Local | WEA Operator defined use | Additional |
| 132 | EU & WEA AMBER | Local | EU-L4 \ WEA Public Safety | Additional |
| 133 | EU & WEA AMBER | Local | WEA State/Local test | Additional |
| 134 | EU & WEA AMBER | Additional | EU-L1 \ WEA Pres | Local |
| 135 | EU & WEA AMBER | Additional | EU-L2 \ WEA Ext | Local |
| 136 | EU & WEA AMBER | Additional | EU-L3 \ WEA Sev | Local |
| 137 | EU & WEA AMBER | Additional | EU & WEA AMBER | Local |
| 138 | EU & WEA AMBER | Additional | WEA RMT | Local |
| 139 | EU & WEA AMBER | Additional | WEA Exercise | Local |
| 140 | EU & WEA AMBER | Additional | WEA Operator defined use | Local |
| 141 | EU & WEA AMBER | Additional | EU-L4 \ WEA Public Safety | Local |
| 142 | EU & WEA AMBER | Additional | WEA State/Local test | Local |
| 143 | EU & WEA AMBER | Additional | EU-Info | Local |
| 144 | EU & WEA AMBER | Additional | EU-L1 \ WEA Pres | Additional |
| 145 | EU & WEA AMBER | Additional | EU-L2 \ WEA Ext | Additional |
| 146 | EU & WEA AMBER | Additional | EU-L3 \ WEA Sev | Additional |
| 147 | EU & WEA AMBER | Additional | EU & WEA AMBER | Additional |
| 148 | EU & WEA AMBER | Additional | WEA RMT | Additional |
| 149 | EU & WEA AMBER | Additional | WEA Exercise | Additional |
| 150 | EU & WEA AMBER | Additional | WEA Operator defined use | Additional |
| 151 | EU & WEA AMBER | Additional | EU-L4 \ WEA Public Safety | Additional |
| 152 | EU & WEA AMBER | Additional | WEA State/Local test | Additional |
| 153 | WEA RMT | Local | EU-L1 \ WEA Pres | Local |
| 154 | WEA RMT | Local | EU-L2 \ WEA Ext | Local |
| 155 | WEA RMT | Local | EU-L3 \ WEA Sev | Local |
| 156 | WEA RMT | Local | EU & WEA AMBER | Local |
| 157 | WEA RMT | Local | WEA RMT | Local |
| 158 | WEA RMT | Local | WEA Exercise | Local |
| 159 | WEA RMT | Local | WEA Operator defined use | Local |
| 160 | WEA RMT | Local | EU-L4 \ WEA Public Safety | Local |
| 161 | WEA RMT | Local | WEA State/Local test | Local |
| 162 | WEA RMT | Local | EU-Info | Local |
| 163 | WEA RMT | Local | EU-L1 \ WEA Pres | Additional |
| 164 | WEA RMT | Local | EU-L2 \ WEA Ext | Additional |
| 165 | WEA RMT | Local | EU-L3 \ WEA Sev | Additional |
| 166 | WEA RMT | Local | EU & WEA AMBER | Additional |
| 167 | WEA RMT | Local | WEA RMT | Additional |
| 168 | WEA RMT | Local | WEA Exercise | Additional |
| 169 | WEA RMT | Local | WEA Operator defined use | Additional |
| 170 | WEA RMT | Local | EU-L4 \ WEA Public Safety | Additional |
| 171 | WEA RMT | Local | WEA State/Local test | Additional |
| 172 | WEA RMT | Additional | EU-L1 \ WEA Pres | Local |
| 173 | WEA RMT | Additional | EU-L2 \ WEA Ext | Local |
| 174 | WEA RMT | Additional | EU-L3 \ WEA Sev | Local |
| 175 | WEA RMT | Additional | EU & WEA AMBER | Local |
| 176 | WEA RMT | Additional | WEA RMT | Local |
| 177 | WEA RMT | Additional | WEA Exercise | Local |
| 178 | WEA RMT | Additional | WEA Operator defined use | Local |
| 179 | WEA RMT | Additional | EU-L4 \ WEA Public Safety | Local |
| 180 | WEA RMT | Additional | WEA State/Local test | Local |
| 181 | WEA RMT | Additional | EU-Info | Local |
| 182 | WEA RMT | Additional | EU-L1 \ WEA Pres | Additional |
| 183 | WEA RMT | Additional | EU-L2 \ WEA Ext | Additional |
| 184 | WEA RMT | Additional | EU-L3 \ WEA Sev | Additional |
| 185 | WEA RMT | Additional | EU & WEA AMBER | Additional |
| 186 | WEA RMT | Additional | WEA RMT | Additional |
| 187 | WEA RMT | Additional | WEA Exercise | Additional |
| 188 | WEA RMT | Additional | WEA Operator defined use | Additional |
| 189 | WEA RMT | Additional | EU-L4 \ WEA Public Safety | Additional |
| 190 | WEA RMT | Additional | WEA State/Local test | Additional |
| 191 | WEA Exercise | Local | EU-L1 \ WEA Pres | Local |
| 192 | WEA Exercise | Local | EU-L2 \ WEA Ext | Local |
| 193 | WEA Exercise | Local | EU-L3 \ WEA Sev | Local |
| 194 | WEA Exercise | Local | EU & WEA AMBER | Local |
| 195 | WEA Exercise | Local | WEA RMT | Local |
| 196 | WEA Exercise | Local | WEA Exercise | Local |
| 197 | WEA Exercise | Local | WEA Operator defined use | Local |
| 198 | WEA Exercise | Local | EU-L4 \ WEA Public Safety | Local |
| 199 | WEA Exercise | Local | WEA State/Local test | Local |
| 200 | WEA Exercise | Local | EU-Info | Local |
| 201 | WEA Exercise | Local | EU-L1 \ WEA Pres | Additional |
| 202 | WEA Exercise | Local | EU-L2 \ WEA Ext | Additional |
| 203 | WEA Exercise | Local | EU-L3 \ WEA Sev | Additional |
| 204 | WEA Exercise | Local | EU & WEA AMBER | Additional |
| 205 | WEA Exercise | Local | WEA RMT | Additional |
| 206 | WEA Exercise | Local | WEA Exercise | Additional |
| 207 | WEA Exercise | Local | WEA Operator defined use | Additional |
| 208 | WEA Exercise | Local | EU-L4 \ WEA Public Safety | Additional |
| 209 | WEA Exercise | Local | WEA State/Local test | Additional |
| 210 | WEA Exercise | Additional | EU-L1 \ WEA Pres | Local |
| 211 | WEA Exercise | Additional | EU-L2 \ WEA Ext | Local |
| 212 | WEA Exercise | Additional | EU-L3 \ WEA Sev | Local |
| 213 | WEA Exercise | Additional | EU & WEA AMBER | Local |
| 214 | WEA Exercise | Additional | WEA RMT | Local |
| 215 | WEA Exercise | Additional | WEA Exercise | Local |
| 216 | WEA Exercise | Additional | WEA Operator defined use | Local |
| 217 | WEA Exercise | Additional | EU-L4 \ WEA Public Safety | Local |
| 218 | WEA Exercise | Additional | WEA State/Local test | Local |
| 219 | WEA Exercise | Additional | EU-Info | Local |
| 220 | WEA Exercise | Additional | EU-L1 \ WEA Pres | Additional |
| 221 | WEA Exercise | Additional | EU-L2 \ WEA Ext | Additional |
| 222 | WEA Exercise | Additional | EU-L3 \ WEA Sev | Additional |
| 223 | WEA Exercise | Additional | EU & WEA AMBER | Additional |
| 224 | WEA Exercise | Additional | WEA RMT | Additional |
| 225 | WEA Exercise | Additional | WEA Exercise | Additional |
| 226 | WEA Exercise | Additional | WEA Operator defined use | Additional |
| 227 | WEA Exercise | Additional | EU-L4 \ WEA Public Safety | Additional |
| 228 | WEA Exercise | Additional | WEA State/Local test | Additional |
| 229 | WEA Operator defined use | Local | EU-L1 \ WEA Pres | Local |
| 230 | WEA Operator defined use | Local | EU-L2 \ WEA Ext | Local |
| 231 | WEA Operator defined use | Local | EU-L3 \ WEA Sev | Local |
| 232 | WEA Operator defined use | Local | EU & WEA AMBER | Local |
| 233 | WEA Operator defined use | Local | WEA RMT | Local |
| 234 | WEA Operator defined use | Local | WEA Exercise | Local |
| 235 | WEA Operator defined use | Local | WEA Operator defined use | Local |
| 236 | WEA Operator defined use | Local | EU-L4 \ WEA Public Safety | Local |
| 237 | WEA Operator defined use | Local | WEA State/Local test | Local |
| 238 | WEA Operator defined use | Local | EU-Info | Local |
| 239 | WEA Operator defined use | Local | EU-L1 \ WEA Pres | Additional |
| 240 | WEA Operator defined use | Local | EU-L2 \ WEA Ext | Additional |
| 241 | WEA Operator defined use | Local | EU-L3 \ WEA Sev | Additional |
| 242 | WEA Operator defined use | Local | EU & WEA AMBER | Additional |
| 243 | WEA Operator defined use | Local | WEA RMT | Additional |
| 244 | WEA Operator defined use | Local | WEA Exercise | Additional |
| 245 | WEA Operator defined use | Local | WEA Operator defined use | Additional |
| 246 | WEA Operator defined use | Local | EU-L4 \ WEA Public Safety | Additional |
| 247 | WEA Operator defined use | Local | WEA State/Local test | Additional |
| 248 | WEA Operator defined use | Additional | EU-L1 \ WEA Pres | Local |
| 249 | WEA Operator defined use | Additional | EU-L2 \ WEA Ext | Local |
| 250 | WEA Operator defined use | Additional | EU-L3 \ WEA Sev | Local |
| 251 | WEA Operator defined use | Additional | EU & WEA AMBER | Local |
| 252 | WEA Operator defined use | Additional | WEA RMT | Local |
| 253 | WEA Operator defined use | Additional | WEA Exercise | Local |
| 254 | WEA Operator defined use | Additional | WEA Operator defined use | Local |
| 255 | WEA Operator defined use | Additional | EU-L4 \ WEA Public Safety | Local |
| 256 | WEA Operator defined use | Additional | WEA State/Local test | Local |
| 257 | WEA Operator defined use | Additional | EU-Info | Local |
| 258 | WEA Operator defined use | Additional | EU-L1 \ WEA Pres | Additional |
| 259 | WEA Operator defined use | Additional | EU-L2 \ WEA Ext | Additional |
| 260 | WEA Operator defined use | Additional | EU-L3 \ WEA Sev | Additional |
| 261 | WEA Operator defined use | Additional | EU & WEA AMBER | Additional |
| 262 | WEA Operator defined use | Additional | WEA RMT | Additional |
| 263 | WEA Operator defined use | Additional | WEA Exercise | Additional |
| 264 | WEA Operator defined use | Additional | WEA Operator defined use | Additional |
| 265 | WEA Operator defined use | Additional | EU-L4 \ WEA Public Safety | Additional |
| 266 | WEA Operator defined use | Additional | WEA State/Local test | Additional |
| 267 | EU-L4 \ WEA Public Safety | Local | EU-L1 \ WEA Pres | Local |
| 268 | EU-L4 \ WEA Public Safety | Local | EU-L2 \ WEA Ext | Local |
| 269 | EU-L4 \ WEA Public Safety | Local | EU-L3 \ WEA Sev | Local |
| 270 | EU-L4 \ WEA Public Safety | Local | EU & WEA AMBER | Local |
| 271 | EU-L4 \ WEA Public Safety | Local | WEA RMT | Local |
| 272 | EU-L4 \ WEA Public Safety | Local | WEA Exercise | Local |
| 273 | EU-L4 \ WEA Public Safety | Local | WEA Operator defined use | Local |
| 274 | EU-L4 \ WEA Public Safety | Local | EU-L4 \ WEA Public Safety | Local |
| 275 | EU-L4 \ WEA Public Safety | Local | WEA State/Local test | Local |
| 276 | EU-L4 \ WEA Public Safety | Local | EU-Info | Local |
| 277 | EU-L4 \ WEA Public Safety | Local | EU-L1 \ WEA Pres | Additional |
| 278 | EU-L4 \ WEA Public Safety | Local | EU-L2 \ WEA Ext | Additional |
| 279 | EU-L4 \ WEA Public Safety | Local | EU-L3 \ WEA Sev | Additional |
| 280 | EU-L4 \ WEA Public Safety | Local | EU & WEA AMBER | Additional |
| 281 | EU-L4 \ WEA Public Safety | Local | WEA RMT | Additional |
| 282 | EU-L4 \ WEA Public Safety | Local | WEA Exercise | Additional |
| 283 | EU-L4 \ WEA Public Safety | Local | WEA Operator defined use | Additional |
| 284 | EU-L4 \ WEA Public Safety | Local | EU-L4 \ WEA Public Safety | Additional |
| 285 | EU-L4 \ WEA Public Safety | Local | WEA State/Local test | Additional |
| 286 | EU-L4 \ WEA Public Safety | Additional | EU-L1 \ WEA Pres | Local |
| 287 | EU-L4 \ WEA Public Safety | Additional | EU-L2 \ WEA Ext | Local |
| 288 | EU-L4 \ WEA Public Safety | Additional | EU-L3 \ WEA Sev | Local |
| 289 | EU-L4 \ WEA Public Safety | Additional | EU & WEA AMBER | Local |
| 290 | EU-L4 \ WEA Public Safety | Additional | WEA RMT | Local |
| 291 | EU-L4 \ WEA Public Safety | Additional | WEA Exercise | Local |
| 292 | EU-L4 \ WEA Public Safety | Additional | WEA Operator defined use | Local |
| 293 | EU-L4 \ WEA Public Safety | Additional | EU-L4 \ WEA Public Safety | Local |
| 294 | EU-L4 \ WEA Public Safety | Additional | WEA State/Local test | Local |
| 295 | EU-L4 \ WEA Public Safety | Additional | EU-Info | Local |
| 296 | EU-L4 \ WEA Public Safety | Additional | EU-L1 \ WEA Pres | Additional |
| 297 | EU-L4 \ WEA Public Safety | Additional | EU-L2 \ WEA Ext | Additional |
| 298 | EU-L4 \ WEA Public Safety | Additional | EU-L3 \ WEA Sev | Additional |
| 299 | EU-L4 \ WEA Public Safety | Additional | EU & WEA AMBER | Additional |
| 300 | EU-L4 \ WEA Public Safety | Additional | WEA RMT | Additional |
| 301 | EU-L4 \ WEA Public Safety | Additional | WEA Exercise | Additional |
| 302 | EU-L4 \ WEA Public Safety | Additional | WEA Operator defined use | Additional |
| 303 | EU-L4 \ WEA Public Safety | Additional | EU-L4 \ WEA Public Safety | Additional |
| 304 | EU-L4 \ WEA Public Safety | Additional | WEA State/Local test | Additional |
| 305 | WEA State/Local test | Local | EU-L1 \ WEA Pres | Local |
| 306 | WEA State/Local test | Local | EU-L2 \ WEA Ext | Local |
| 307 | WEA State/Local test | Local | EU-L3 \ WEA Sev | Local |
| 308 | WEA State/Local test | Local | EU & WEA AMBER | Local |
| 309 | WEA State/Local test | Local | WEA RMT | Local |
| 310 | WEA State/Local test | Local | WEA Exercise | Local |
| 311 | WEA State/Local test | Local | WEA Operator defined use | Local |
| 312 | WEA State/Local test | Local | EU-L4 \ WEA Public Safety | Local |
| 313 | WEA State/Local test | Local | WEA State/Local test | Local |
| 314 | WEA State/Local test | Local | EU-Info | Local |
| 315 | WEA State/Local test | Local | EU-L1 \ WEA Pres | Additional |
| 316 | WEA State/Local test | Local | EU-L2 \ WEA Ext | Additional |
| 317 | WEA State/Local test | Local | EU-L3 \ WEA Sev | Additional |
| 318 | WEA State/Local test | Local | EU & WEA AMBER | Additional |
| 319 | WEA State/Local test | Local | WEA RMT | Additional |
| 320 | WEA State/Local test | Local | WEA Exercise | Additional |
| 321 | WEA State/Local test | Local | WEA Operator defined use | Additional |
| 322 | WEA State/Local test | Local | EU-L4 \ WEA Public Safety | Additional |
| 323 | WEA State/Local test | Local | WEA State/Local test | Additional |
| 324 | WEA State/Local test | Additional | EU-L1 \ WEA Pres | Local |
| 325 | WEA State/Local test | Additional | EU-L2 \ WEA Ext | Local |
| 326 | WEA State/Local test | Additional | EU-L3 \ WEA Sev | Local |
| 327 | WEA State/Local test | Additional | EU & WEA AMBER | Local |
| 328 | WEA State/Local test | Additional | WEA RMT | Local |
| 329 | WEA State/Local test | Additional | WEA Exercise | Local |
| 330 | WEA State/Local test | Additional | WEA Operator defined use | Local |
| 331 | WEA State/Local test | Additional | EU-L4 \ WEA Public Safety | Local |
| 332 | WEA State/Local test | Additional | WEA State/Local test | Local |
| 333 | WEA State/Local test | Additional | EU-Info | Local |
| 334 | WEA State/Local test | Additional | EU-L1 \ WEA Pres | Additional |
| 335 | WEA State/Local test | Additional | EU-L2 \ WEA Ext | Additional |
| 336 | WEA State/Local test | Additional | EU-L3 \ WEA Sev | Additional |
| 337 | WEA State/Local test | Additional | EU & WEA AMBER | Additional |
| 338 | WEA State/Local test | Additional | WEA RMT | Additional |
| 339 | WEA State/Local test | Additional | WEA Exercise | Additional |
| 340 | WEA State/Local test | Additional | WEA Operator defined use | Additional |
| 341 | WEA State/Local test | Additional | EU-L4 \ WEA Public Safety | Additional |
| 342 | WEA State/Local test | Additional | WEA State/Local test | Additional |
| 343 | EU-Info | Local | EU-L1 \ WEA Pres | Local |
| 344 | EU-Info | Local | EU-L2 \ WEA Ext | Local |
| 345 | EU-Info | Local | EU-L3 \ WEA Sev | Local |
| 346 | EU-Info | Local | EU & WEA AMBER | Local |
| 347 | EU-Info | Local | WEA RMT | Local |
| 348 | EU-Info | Local | WEA Exercise | Local |
| 349 | EU-Info | Local | WEA Operator defined use | Local |
| 350 | EU-Info | Local | EU-L4 \ WEA Public Safety | Local |
| 351 | EU-Info | Local | WEA State/Local test | Local |
| 352 | EU-Info | Local | EU-Info | Local |
| 353 | EU-Info | Local | EU-L1 \ WEA Pres | Additional |
| 354 | EU-Info | Local | EU-L2 \ WEA Ext | Additional |
| 355 | EU-Info | Local | EU-L3 \ WEA Sev | Additional |
| 356 | EU-Info | Local | EU & WEA AMBER | Additional |
| 357 | EU-Info | Local | WEA RMT | Additional |
| 358 | EU-Info | Local | WEA Exercise | Additional |
| 359 | EU-Info | Local | WEA Operator defined use | Additional |
| 360 | EU-Info | Local | EU-L4 \ WEA Public Safety | Additional |
| 361 | EU-Info | Local | WEA State/Local test | Additional |

