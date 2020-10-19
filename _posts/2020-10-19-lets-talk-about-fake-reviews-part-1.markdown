---
layout: post
title: Let's talk about fake reviews - part 1
date: 2020-10-19
description: The state of fake reviews and eCommerce fraud after 5 years of analysis at Fakespot
cover_url: fakespot_avg_graph.png
published: true
permalink: /:year/:month/:day/lets-talk-about-fake-reviews-part-1
author: Saoud Khalifah # Add name author (optional)
---

Fake reviews garner much attention and controversy worldwide. It is *the* primary reason Fakespot was created. Fakespot was launched after being scammed on Amazon with a product that had hundreds of fake reviews.
 
 When reading the reviews for this product, it was obvious that the seller had implanted fake reviews with the use of bots, spiced up with some human input. The product was freshly launched and it had *hundreds of 5 star reviews* in a matter of hours with a completely no name brand! 

I was already familiar with black hat techniques fraudsters use to increase their listings' rankings due to my security background, a passion I developed in my early teenage years. In case you were wondering... Yes, I was a hacker.

At the age of 18, I submitted my first bug bounties to the Zero Day Initiative, a pioneer of the bug bounty programs when there were none. The first vulnerability I discovered was a **Microsoft PowerPoint** buffer overflow. My research later lead me to finding bugs in software ranging from **Adobe PDF Reader**, **WinAmp**, **Foxit**, **VLC Player** to some more **Microsoft** (*check out my publicly published vulnerabilities/exploits [here](https://www.exploit-db.com/search?e_author=skd) if you're curious*). 

![The Metasploit exploit for the PowerPoint vulnerability I found way back in the day](/assets/img/metasploit_pp_exploit.png){:style="border: 2px solid black; max-width: 700px;"}

*Funny story: I applied for a Microsoft internship at the time I received the payout for the bug bounty. Back in those days, Microsoft was notorious for "hating" on anyone that would find weaknesses in their products especially security researchers. Needless to say, they immediately rejected my application. It just shows how much Microsoft has changed since then.*

My love for security has taught me that, reverse engineering to the lowest level is always critical. Especially, if you want to understand the fundamentals and scope to the problem you are encountering. That mindset helped me discover a completely different class of vulnerabilities altogether, the social context vulnerabilities in eCommerce: **fake reviews** and many others.

Fakespot was initially built to automate the process of analyzing the trustworthiness of reviews. After all, who has hours of free time to dissect and verify the reviews they're reading? Since the launch of Fakespot in 2015, the state of fake reviews and eCommerce fraud has emerged and evolved in ways that I wouldn't have imagined.

Before diving in to fake reviews and eCommerce fraud, let's talk about eCommerce and take a look at the total volume and growth of sales:

![eCommerce past years growth and forecast for 2021 - Source: Shopify](/assets/img/shopify_sales_graph.png)

eCommerce sales are forecast to be close to *$4 trillion dollars* this year. That is *nearly 20%* of the GDP for the United States in 2019 alone. These numbers are astonishing and showcase the vast opportunities in eCommerce. 

More and more sales happen online in the year of 2020. We can only see eCommerce gobbling up even more sales from brick and mortal retail as consumers work from home in quarantine. This is indeed the era of the *digital gold rush*. **Make no mistake, it also the era of the digital Wild West.**

![That's the truth, Clint.](/assets/img/wild_west_meme.jpg)

Let's dive into trends we see with fake reviews.

Fakespot has analyzed over **8 billion reviews**, **1 billion reviewers** and served over **20 million users** visiting **fakespot.com**. From our analysis, we can clearly understand the trends that show the increase in fraud over the last 3 years with each month in comparison:

![The monthly average of analyses that had >= 30% unreliable reviews - Source: Fakespot](/assets/img/fakespot_avg_graph.png){:style="border: 2px solid black;"}

The data unveils the whole story for the trend of fake reviews. We have comparable rises each year in the amount of unreliable reviews. 

Specifically, the averages from March 2020 to August 2020 reached **record numbers never seen before**. This sequence of increases would only occur in Black Friday and Christmas shopping seasons of prior years. Sellers are quoted as saying "It was Black Friday everyday" [[1]](https://mashable.com/article/people-shopping-more-coronavirus/) and we all experienced the widespread stock depletion on Amazon and other platforms.

Let's also take note that in September 2020 Amazon significantly **purged**, albeit in a delayed fashion, a large chunk of fake reviews to move it down from the **43.75%** average we see in August. Likely, in preparation for Prime Day and the impending holiday shopping season. 

This year is quite different, *to say the least*. 

As the majority of the world went into lockdown the importance of reviews increases for sellers and consumers alike. We shop online, unable to judge the product by touching, feeling and physically testing it. Thus, we heavily rely on the opinions of others that have purchased the product. **I believe one of the great innovations of the Internet is shared knowledge, and reviews are a conduit of that.** Unfortunately, sellers also know that reviews can make or break their sales and they are abusing that to the maximum for their advantage.

This overview of the general trends is useful in understanding the scale of eCommerce fraud. Fake reviews and the fraud surrounding eCommerce is extensive, complex and deep. To go through all the topics requires a sequence of posts with this being the first one. 

**If you want to try out Fakespot and spend less time reading and wondering if the reviews are real, download our [Chrome extension](https://chrome.google.com/webstore/detail/fakespot-analyze-fake-ama/nakplnnackehceedgkgkokbgbmfghain) or visit us at [fakespot.com](https://www.fakespot.com).**
