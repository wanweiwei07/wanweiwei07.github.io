---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

This webiste is in English. For Japanese information, goto my [Researchmap](https://researchmap.jp/weiweiwan){:target="_blank"}. The following pictures show the robots in [our lab](https://www.roboticmanipulation.org/){:target="_blank"}. They are rendered using a simulation/planning system I developed under the support of [NEDO](https://www.nedo.go.jp/english/index.html){:target="_blank"}. A bunch of videos about the system can be found in [my Youtube channel](https://www.youtube.com/WeiweiWan/){:target="_blank"}.

<style>
  .image-carousel {
    position: relative;
    margin: 1.5em 0 2em;
    overflow: hidden;
    border-radius: 4px;
    background: #f8f9f9;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }

  .image-carousel__track {
    position: relative;
  }

  .image-carousel__slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
    pointer-events: none;
  }

  .image-carousel__slide.is-active {
    position: relative;
    opacity: 1;
    pointer-events: auto;
    z-index: 1;
  }

  .image-carousel__slide img {
    display: block;
    width: 100%;
    height: auto;
  }

  .image-carousel__control {
    position: absolute;
    top: 50%;
    z-index: 2;
    width: 2.5rem;
    height: 2.5rem;
    margin-top: -1.25rem;
    border: 0;
    border-radius: 999px;
    background: rgba(17, 17, 17, 0.6);
    color: #fff;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
  }

  .image-carousel__control--prev {
    left: 0.75rem;
  }

  .image-carousel__control--next {
    right: 0.75rem;
  }

  .image-carousel__nav {
    position: absolute;
    left: 50%;
    bottom: 0.85rem;
    z-index: 2;
    display: flex;
    gap: 0.5rem;
    transform: translateX(-50%);
  }

  .image-carousel__dot {
    width: 0.7rem;
    height: 0.7rem;
    padding: 0;
    border: 0;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.55);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18);
    cursor: pointer;
  }

  .image-carousel__dot.is-active {
    background: #fff;
  }

  @media (max-width: 600px) {
    .image-carousel__control {
      width: 2.15rem;
      height: 2.15rem;
      margin-top: -1.075rem;
      font-size: 1.25rem;
    }

    .image-carousel__control--prev {
      left: 0.5rem;
    }

    .image-carousel__control--next {
      right: 0.5rem;
    }
  }
</style>

<div class="image-carousel js-image-carousel" data-carousel-interval="5000" aria-label="Lab robots image carousel">
  <div class="image-carousel__track">
    <figure class="image-carousel__slide is-active">
      <img src="{{ base_path }}/images/wrs_robots2.jpg" alt="Simulation of dual-arm robots in the lab">
    </figure>
    <figure class="image-carousel__slide">
      <img src="{{ base_path }}/images/wrs_robots.jpg" alt="Robot workcell simulation scene">
    </figure>
    <figure class="image-carousel__slide">
      <img src="{{ base_path }}/images/robotlist2.jpg" alt="Robots and manipulation systems developed in the lab">
    </figure>
  </div>
  <button class="image-carousel__control image-carousel__control--prev" type="button" aria-label="Previous image">&lsaquo;</button>
  <button class="image-carousel__control image-carousel__control--next" type="button" aria-label="Next image">&rsaquo;</button>
  <div class="image-carousel__nav" aria-label="Carousel navigation">
    <button class="image-carousel__dot is-active" type="button" aria-label="Show image 1"></button>
    <button class="image-carousel__dot" type="button" aria-label="Show image 2"></button>
    <button class="image-carousel__dot" type="button" aria-label="Show image 3"></button>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var carousels = document.querySelectorAll(".js-image-carousel");

    Array.prototype.forEach.call(carousels, function(carousel) {
      var slides = carousel.querySelectorAll(".image-carousel__slide");
      var dots = carousel.querySelectorAll(".image-carousel__dot");
      var prevButton = carousel.querySelector(".image-carousel__control--prev");
      var nextButton = carousel.querySelector(".image-carousel__control--next");
      var interval = parseInt(carousel.getAttribute("data-carousel-interval"), 10) || 5000;
      var currentIndex = 0;
      var timerId = null;

      if (slides.length < 2) {
        return;
      }

      var showSlide = function(index) {
        currentIndex = (index + slides.length) % slides.length;

        Array.prototype.forEach.call(slides, function(slide, slideIndex) {
          slide.className = slideIndex === currentIndex ? "image-carousel__slide is-active" : "image-carousel__slide";
        });

        Array.prototype.forEach.call(dots, function(dot, dotIndex) {
          dot.className = dotIndex === currentIndex ? "image-carousel__dot is-active" : "image-carousel__dot";
        });
      };

      var stopAutoPlay = function() {
        if (timerId) {
          window.clearInterval(timerId);
          timerId = null;
        }
      };

      var startAutoPlay = function() {
        stopAutoPlay();
        timerId = window.setInterval(function() {
          showSlide(currentIndex + 1);
        }, interval);
      };

      prevButton.addEventListener("click", function() {
        showSlide(currentIndex - 1);
        startAutoPlay();
      });

      nextButton.addEventListener("click", function() {
        showSlide(currentIndex + 1);
        startAutoPlay();
      });

      Array.prototype.forEach.call(dots, function(dot, dotIndex) {
        dot.addEventListener("click", function() {
          showSlide(dotIndex);
          startAutoPlay();
        });
      });

      carousel.addEventListener("mouseenter", stopAutoPlay);
      carousel.addEventListener("mouseleave", startAutoPlay);
      carousel.addEventListener("focusin", stopAutoPlay);
      carousel.addEventListener("focusout", startAutoPlay);

      showSlide(0);
      startAutoPlay();
    });
  });
</script>

Short Bio
======
I am an associate professor working at the [School of Engineering Science](https://www.es.osaka-u.ac.jp/en/){:target="_blank"}, [Osaka University](https://www.osaka-u.ac.jp/en){:target="_blank"}, Japan.  I am running a lab together with [Professor Kensuke Harada](http://www.hlab.sys.es.osaka-u.ac.jp/people/harada/){:target="_blank"} and [Assistant Professor Takuya Kiyokawa](https://takuya-ki.github.io/){:target="_blank"}. The website of our lab is [https://www.roboticmanipulation.org](https://www.roboticmanipulation.org){:target="_blank"}. The name of the website shows our research topic -- robotic manipulation. Prior to Osaka University, I was on a tenure-track position at the Manipulation Research Group, [Intelligent System Research Institute](https://unit.aist.go.jp/is/index.html){:target="_blank"}, [National Institute of Advanced Industrial Science and Technology (AIST)](https://www.aist.go.jp/index_en.html){:target="_blank"} during 2015-2017. I was affiliated with the [Japan Society for the Promotion of Science (JSPS)](https://www.jsps.go.jp/english/){:target="_blank"} from 2013 to 2015 and did my postdoc research at the [Manipulation Lab](http://mlab.ri.cmu.edu/) in the [Robotics Institute](https://www.ri.cmu.edu/){:target="_blank"}, [Carnegie Mellon University](https://www.cmu.edu/){:target="_blank"}. I got my PhD in Robotics from the [Graduate School of Information Science and Technology](https://www.i.u-tokyo.ac.jp/index_e.shtml){:target="_blank"}, [The University of Tokyo](https://www.u-tokyo.ac.jp/en/index.html){:target="_blank"} in 2013. I am an IEEE senior member, having affiliations with the IEEE Robotics and Automation Society, and the IEEE System, Man, and Cybernetics Society. I am also a member of RSJ (the Robotics Society of Japan) and JSME (Japan Society of Mechanical Engineers).

Research Interest and Past Studies
======
<img align="right" width="370" src="https://wanweiwei07.github.io/images/manipulatemyinitials.gif">

My major interest is smart manufacturing using dual-arm robots: Developing and deploying grasping planning, motion planning, and other low level and high level task planning algorithms for next-generation factories. I am also studying visual perception, force control, and learning approaches to make up the inherent shortages of planning algorithms. Back to my postdoc at Carnegie Mellon University, I was working with [Professor Matt Mason](http://www.cs.cmu.edu/~mason/){:target="_blank"} and focused on regrasp. During my Ph.D. at the University of Tokyo, I was working with [Professor Rui Fukui](https://www.k.u-tokyo.ac.jp/pros-e/person/rui_fukui/rui_fukui.htm){:target="_blank"}, [Professor Tomomasa Sato](https://researchmap.jp/read0007519){:target="_blank"}, and [Professor Yasuo Kuniyoshi](http://www.isi.imi.i.u-tokyo.ac.jp/member/){:target="_blank"} and focused on grasping, caging, and the related mechanical design problems. Before my PhD study, I worked on motion planning under the supervision of Professor Hong Liu at Peking University. You may find more information about my research at my YouTube Channel and my Github repositorie:

[<img src="https://wanweiwei07.github.io/images/github_logo.png" width="21%">](https://github.com/wanweiwei07)[<img src="https://wanweiwei07.github.io/images/youtube_logo.png" width="21%">](https://www.youtube.com/channel/UCqevHIf9MgWwCXDDIsj4kAQ)

Prospective Students
======
If you are considering our lab, you are probably looking at the top-tier institutes working on robotic manipulation. Thank you very much for your interest. In our lab, we challenge our students to develop practical hardware and software systems. We have strong connections with industry and train our students to not only publish high-quality paper but also develop systems that solve real-world problems raised by our partners. The research topics of students working with me could be found [in this page](https://wanweiwei07.github.io/people/){:target="_blank"}.

**Past Visitors**
<div style="display:inline-block;width:270px;"><script type="text/javascript" src="//rf.revolvermaps.com/0/0/7.js?i=1tbxe9zedcg&amp;m=0&amp;c=007eff&amp;cr1=00ff6c&amp;br=2&amp;sx=0&amp;ds=70" async="async"></script></div>
