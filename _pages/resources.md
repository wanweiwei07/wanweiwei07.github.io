---
layout: archive
title: "Slide Templates"
permalink: /resources/
author_profile: true
---

* [Aspect ratio 3:4 2018](https://drive.google.com/open?id=1YG9ZrEuOVbUPSJA4jZPQW3X5DvlTG06T)
* [Aspect ratio 16:9 2018](https://drive.google.com/open?id=1ZlTBCX-82qmsS4wF2qI6TaAcHCLaxWiI)
* [Aspect ratio 16:9 2021](https://wanweiwei07.github.io/files/Wan_Template_16to9_2021.pptx)
* [Aspect ratio 16:9 2021 WRS](https://wanweiwei07.github.io/files/Wan_Template_16to9_2021_wrs.pptx)
* [Aspect ratio 16:9 2022](https://wanweiwei07.github.io/files/Wan_Template_16to9_2022.pptx)
* Naming your slides: yearmonthdayauthor_content.ppt or pptx. E.g. 20180426moriyama_screwingbolts.pptx
* Tips for making slides: [日本語](https://www.notion.so/f010dc200fbc42e883c2120d209fdfcd) [English](https://www.notion.so/Tips-for-Making-Slides-f1f5d327d68749359985b3fbf6ab52a8)

Technical Report Templates
======
* [Guide](https://drive.google.com/open?id=17nl71bxC1NI_ELB7aSV6wUd5et-BLrld)
* [Latex Source](https://drive.google.com/open?id=1F5PUgFk91vwCV2hvi_dKJw8tuVjg4yDX)
* Naming your report: yearmonthdayauthor_content.pdf and yearmonthdayauthor_content.zip (tex package). E.g. 20180426moriyama_iros.pdf or zip
* Use zip, instead of rar to compress your tex package.
* Use online editors like [Overleaf](https://www.overleaf.com/) is a highly recommended.
* Check your English with [Grammarly](https://app.grammarly.com/).

A Primer on Making Slides
======
* Using the above templates is highly recommended.
* Take care of fonts and font sizes. 
  * All pages shall have same fonts for a certain language: Aarial for English, MS Gothic for Japanese
  * Title pages always have larger fonts than normal pages: Consider using 44 pt, 36 pt, 24 pt, 20 pt, 18 pt; Avoid small fonts.
* Arrange your pictures to have good visual effect. Make the background of your pictures white or transparent to fit our templates.
  * If you design CAD models:
      * Use [silhouette rendering](https://www.panda3d.org/blog/wp-content/uploads/2018/04/2018-04-19-222925_1042x747_scrot.png): White background, No shadow, No real-time graphics, No shaded rendering.
      * Use transparency and colored transparency to denote complicated design; Use solid color to denote key components (linkages, cables, etc.)
* Prepare your handouts as double-sided A4 pages, with 8 slides on each page
  * You cannot directly do that in Powerpoint. Instead, save your slides into a pdf file, then open and print it as 4x2 slides per page using [Acrobat Reader](https://get.adobe.com/reader/).
 
A Primer on Writing Technical Reports, Academic Paper, and Reviews
======
* In case you are a complete beginner and confused about how to get started, refer to the following instructions: [English version](https://drive.google.com/file/d/1JOWQBulV0HJpUJ2P3_axhwVoOv5wCaGP/view?usp=sharing) ([Japanese translation](https://drive.google.com/file/d/10nHb9m7H-aVLotnPPslf6yaTz7lua5nY/view?usp=sharing), [Chinese translation](https://drive.google.com/file/d/1N8mGN9FEaAecEiSkEFA2LmW7H41AWbav/view?usp=sharing))
* A guide on good writing is [here](https://www.cs.cmu.edu/~pausch/Randy/Randy/raibert.htm). The key point is <span style="color:red">spill the beans fast</span>.
* My recommended work routine is as follows.
  1. Make a draft of paper organization (section names, arrangement of sections, etc.), and discuss with me a lot.
  2. Determine the key sentences of each paragraph.
  3. Determine the glue between paragraphs.
  4. Fill up the sentences.
  5. Make clear and unified figures.
* Software
  * I use Microsoft Powerpoint to preapre figures, as well as unify fonts and legends. If you used the same software, share your *.pptx file with me. Some notes on using powerpoint are as follows.
    * Use the default 16:9 slide with white color as background.
    * Zoom in or out your pictures to take half of the slide width for a single column figure or a full slide width for a double-column figure.
    * Use 16pt, New Times Roman to format texts in your figure.
    * Use 1.5pt line width to draw segments, arrows, and frameboxes.
    * Use Open Arrow, Size 9 to format arrow type and arrow sizes.
    * Use Oval Arrow, Size 5 to prepare a callout line for a component in the figure.
    * When saving screen images, enlarge them to 4K size and make a screen shot. You will be able to freely determine what to be included in a later stage compared with a screen cut.
  * I suggest using [Overleaf](https://www.overleaf.com/) to prepare your manuscript. The good point of overleaf is collaborative editing. We may work together to improve the formats, organizations, and specific expressions.
  * I use [google scholar](https://scholar.google.co.jp/) -- my library -- to manage references. You may copy the bibtex format of references directly from it. 
* Some details
  * Use Surname et al. [ID] to cite papers.
  * Use bold black font to emphasize key words.
  * Use Fig.No, Alg.No, Tbl.BigRomanNo to cite figures, algorithms, and tables.
  * Use \label{} and \\ref{} to refer to contents in your paper. Do not cite numbers directly.
  * Name your labels using meaningful words. For example, use "figteaser" instead of "fig1".
  * Figures are recommended to have white background.
* Tenses
  * Please read [this article](https://www.editage.jp/insights/the-secret-to-using-tenses-in-scientific-writing).
* Connecting words
  * Please read [this article](http://writing2.richmond.edu/writing/wweb/trans1.html)
* Equations and symbols
  * Single letter variables should be in italic. Multiple letter variables, functions and labels should not be in italic.
  * If you write ab in italics, it means a x b. Use this visualization to correct all your math.
  * Two italic variables next to each other means multiplication. Only use an explicit multiplication sign if absolutely needed.
  * Use the proper multiplication sign and not an asterisk. If you want to use a dot, use a centered dot and not a period (full-stop).
  * Physical units must not be in italic.
  * There should always be a space between a number and the units (with the exception of the degree symbol and %).
  * Use bold font for vectors.
* Reviews
  * Some time I ask a senior Ph.D. student who has really solid knowledge to help review a paper. A good review might be summarized by answering the following questions:
    1. What did this paper do?
    2. What are the advantages claimed by the authors?
    3. What experiments did the authors do? Did the experiments validated the advantages in 3?
    4. What is pros and cons in your opinion? Are the ideas and theories interesting, novel, and enough?
    5. Your suggestions on how to improve the paper.
    6. Is the English good enough to understand? 
    7. Is the organization clear?
    8. Typos and grammatical problems
* When you receive comments from reviewers, please follow [this instruction](https://juicy-grenadilla-3fb.notion.site/What-to-do-after-receiving-comments-from-reviewers-738d91261bdd4ff4b040083fa91c5665) to write response letters and revise your manuscript. Please keep the suggested timeline to avoid missing deadlines.

Videos
======
* Use high-quality cameras (at least HD) and tripods in the lab to take real-world videos. Make sure the surrounding environment is tidied up.
* Use multiple cameras to take videos from different view points and of different scales.

General Discussions
======
* I recommend share interesting techs, systems, developments, as well as ask questions on [Slack](https://harada-lab.slack.com/). wan-researchshare-eng is the English channel.
* You may find interesting news shared by me and many other robotic researchers from the [SICE manipulation channel](https://www.facebook.com/groups/964076620332165/) on Facebook. The channel is organized by Prof. Harada. Another candidate is the [IEEE manipulation channel](https://www.facebook.com/groups/246281928815732/). The channel is organized by Maximo A. Roa.
I use line/wechat for instance messaging. Drop by my office and scan my QR code if you would like to get connected in real time.

Third-Party Tools
======
A list of third-party tools that might be helpful to you.
* [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/): Compiling Packages on Windows 
* [Msys2](https://www.msys2.org/): Linux Environment and Building Tools on Windows
* [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10): Microsoft VM 
* [Overleaf](https://www.overleaf.com/): Online Text Editing
* [Grammarly](https://app.grammarly.com/): Online Grammar Check
* [DeepL](https://www.deepl.com/en/translator): Online Translation
* [EV Screen Recorder](http://www.ieway.cn/evcapture.html): Screen Video Recording
* [Screen to GIF](https://www.screentogif.com/): Make GIF Videos 
* [Rapid Environment Editor](https://www.rapidee.com/): A Friendly Editor for Configuring Windows Environment Variables

名刺テンプレート （Name card)
======
* 大学生協まで発注するか、下記のWORDファイルをダウンロードし、エーワンマルチカードの紙を使ってプリントしてください（F10A4-1タイプ）.
* You may pay Seikyo to make the cards for you, or you may download the following template and print it using name card printing sheet (A-one, F10A4-1 type).
  * [表側](https://drive.google.com/file/d/1UnQ_H86-diziaCJooTV7k6TXEHrbJDx9/view?usp=sharing)（front, Japanese）　[裏側](https://drive.google.com/open?id=1mwbPsA5nI1bIDYcW3TBThMNOCwPeUxvy)（back, English）
  * [2022最新版・表裏](https://docs.google.com/presentation/d/1eBKNEnA8wUAQphu7IXwiDjSI5YjM_ppJ/edit?usp=sharing&ouid=108257579074904163670&rtpof=true&sd=true)（front, Japanese; back, English）
