---
layout: archive
title: "Slide Templates"
permalink: /resources/
author_profile: true
---

* [Aspect ratio 3:4 2018](https://drive.google.com/open?id=1YG9ZrEuOVbUPSJA4jZPQW3X5DvlTG06T)
* [Aspect ratio 16:9 2018](https://drive.google.com/open?id=1ZlTBCX-82qmsS4wF2qI6TaAcHCLaxWiI)
* [Aspect ratio 16:9 2021](https://wanweiwei07.github.io/files/Wan_Template_16to9_2021.pptx)
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
* Using the templates is highly recommended.
* Take care of fonts and font sizes. 
  * All pages shall have same fonts for a certain language.
  * Title pages always have larger fonts than normal pages.
* Arrange your pictures to have good visual effect. Make the background of your pictures white to fit our templates.
  * If you design CAD models:
      * Use [silhouette rendering](https://www.panda3d.org/blog/wp-content/uploads/2018/04/2018-04-19-222925_1042x747_scrot.png): White background, No shadow, No real-time graphics, No shaded rendering.
      * Use transparency and colored transparency to denote complicated design; Use solid color to denote key components (linkages, cables, etc.)
* Prepare your handouts as double-sided A4 pages, with 8 slides on each side.
  * You cannot directly do that in Powerpoint. Instead, save your slides into a pdf file, then open and print it as 4x2slides/side using [Acrobat Reader](https://get.adobe.com/reader/).
 
A Primer on Writing Technical Reports, Academic Paper, and Reviews
======
* In case you are a complete beginner and confused about how to get started, refer to the following instructions: [English version](https://drive.google.com/file/d/1JOWQBulV0HJpUJ2P3_axhwVoOv5wCaGP/view?usp=sharing) ([Japanese translation](https://drive.google.com/file/d/10nHb9m7H-aVLotnPPslf6yaTz7lua5nY/view?usp=sharing), [Chinese translation](https://drive.google.com/file/d/1N8mGN9FEaAecEiSkEFA2LmW7H41AWbav/view?usp=sharing))
* A guide on good writing is [here](https://www.cs.cmu.edu/~pausch/Randy/Randy/raibert.htm). The key point is <span style="color:red">spill the beans fast</span>.
* My recommendations are as follows.
  * Make a draft of paper organization (section names, arrangement of sections, etc.), and discuss with me a lot.
  * Determine the key sentences of each paragraph.
  * Determine the glue between paragraphs.
  * Fill up the sentences.
  * Make clear and unified figures.
* Software
  * I use Microsoft Powerpoint to edit graphs, as well as unify fonts and legends. If you used the same software, share your *.pptx file with me.
  * I suggest working on google doc first, and move it to latex later. The good point of google doc is collaborative editing. We may also focus on contents rather than latex symbols.
  * When moving the contents to latex, I recommend using [Overleaf](https://www.overleaf.com/) to edit collaboratively.
  * I use [google scholar](https://scholar.google.co.jp/) -- my library -- to manage references. You may copy the bibtex format of a paper directly from it. 
* Some details
  * Use Surname et al. [ID] to cite papers.
  * Use bold black font to emphasize key words.
  * Use Fig.No, Alg.No, Tbl.BigRomanNo to cite figures, algorithms, and tables.
  * Use \label{} and \ref{} to refer to contents in your paper. Do not cite numbers directly.
  * Name your labels using meaningful words. For example, use "figteaser" instead of "fig1".
  * Figures are recommended to have white background.
* Tenses
  * Please read [this article](https://www.editage.jp/insights/the-secret-to-using-tenses-in-scientific-writing).
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
