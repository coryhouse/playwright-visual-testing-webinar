import React from 'react';

export default function ScrollableContent() {
    return (
        <>
            <p>Learn what visual testing is, why visual testing is important, the differences between visual and functional testing and how you can get started with automated visual testing today.</p>
            <p class="has-small-font-size"><em>Editor’s Note: This post was originally published in 2019, and has been recently updated for accuracy and completeness. </em></p>
            <h2><strong>What is Meant By Visual Testing?</strong></h2>
            <p>Visual testing evaluates the visible output of an application and compares that output against the results expected by design. In other words, it helps catch “visual bugs” in the appearance of a page or screen, which are distinct from strictly functional bugs. <a href="https://applitools.com/platform/eyes/">Automated visual testing tools</a>, like Applitools, can help speed this visual testing up and reduce errors that are occur with manual verification.</p>
            <p>You can run visual tests at any time on any application with a visual user interface. Most developers run visual tests on individual components during development, and on a functioning application during end-to-end tests.</p>
            <p>In today’s world, in the world of HTML, web developers create pages that appear on a mix of browsers and operating systems. Because HTML and CSS are standards, frontend developers want to feel comfortable with a ‘write once, run anywhere’ approach to their software. Which also translates to “Let QA sort out the implementation issues.” QA is still stuck checking each possible output combination for visual bugs.</p>
            <p>This explains why, when I worked in product management, QA engineers would ask me all the time, “Which platforms are most important to test against?” If you’re like most QA team members, your test matrix has probably exploded: multiple browsers, multiple operating systems, multiple screen sizes, multiple fonts — and dynamic responsive content that renders differently on each combination.</p>
            <p>If you are with me so far, you’re starting to answer the question: why do visual testing?</p>
            <h2>Why is Visual Testing Important?</h2>
            <p>We do visual testing because visual errors happen — more frequently than you might realize. Take a look at this visual bug on Instagram’s app:</p>
            <p>The text and ad are crammed together. If this was your ad, do you think there would be a revenue impact? Absolutely.</p>
            <p>Visual bugs happen at other companies too: <a href="https://twitter.com/EranBarlev/status/1020013582199676928">Amazon</a>. <a href="https://twitter.com/deefex/status/1242574176050970626">Google</a>.&nbsp;<a href="https://twitter.com/Applitools/status/1349462419404308481">Slack</a>. <a href="https://twitter.com/pri_tech_mom/status/1369900152362655746">Robin Hood</a>. <a href="https://twitter.com/Applitools/status/1181531941096570880">Poshmark</a>. <a href="https://twitter.com/Applitools/status/1180037598561128448">Airbnb.</a> <a href="https://twitter.com/Applitools/status/1123619551982211072">Yelp</a>. <a href="https://twitter.com/pri_tech_mom/status/1416865694411489281">Target</a>. <a href="https://twitter.com/Applitools/status/1015271543209771009">Southwest</a>. <a href="https://twitter.com/EranBarlev/status/1019984879151284224">United</a>. <a href="https://twitter.com/Applitools/status/1112738531376394240">Virgin Atlantic</a>. <a href="https://twitter.com/techgirl1908/status/1050074470554030080">OpenTable</a>. These aren’t cosmetic issues. In each case, visual bugs are blocking revenue.</p>
            <p>If you need to justify spending money on visual testing, share these examples with your boss.</p>
            <p>All these companies are able to hire some of the smartest engineers in the world. If it happens to Google, or Instagram, or Amazon, it probably can happen to you, too.</p>
            <p>Why do these visual bugs occur? Don’t they do functional testing? They do — but it’s not enough.</p>
            <p>Visual bugs are rendering issues. And rendering validation is not what functional testing tools are designed to catch. Functional testing measures functional behavior.</p>
            <h3>Why can’t functional test cover visual issues?</h3>
            <p>Sure, functional test scripts can validate the size, position, and color scheme of visual elements. But if you do this, your test scripts will soon balloon in size due to checkpoint bloat.</p>
            <p>To see what I mean, let’s look at an Instagram ad screen that’s properly rendered. There are 21 visual elements by my count — various icons, text. (This ignores iOS elements at the top like WiFi signal and time, since those aren’t controlled by the Instagram app.)</p>
            <p>If you used traditional checkpoints in a functional testing tool like <a href="https://www.seleniumhq.org/projects/webdriver/">Selenium Webdriver</a>, <a href="https://www.cypress.io/">Cypress</a>, <a href="https://webdriver.io/">WebdriverIO</a>, or <a href="http://appium.io/">Appium</a>, you’d have to check the following for each of those 21 visual elements:</p>
            <ol>
            <li>Visible (true/false)</li>
            <li>Upper-left x,y coordinates</li>
            <li>Height</li>
            <li>Width</li>
            <li>Background color</li>
            </ol>
            <p>That means you’d need the following number of assertions:</p>
            <p><strong>21 visual elements x 5 assertions per element = 105 lines of assertion code</strong></p>
            <p>Even with all this assertion code, you wouldn’t be able to detect all visual bugs. Such as whether a visual element can’t be accessed because it’s being covered up, which blocked revenue in the above examples from <a href="https://twitter.com/Applitools/status/1123619551982211072">Yelp</a>, <a href="https://twitter.com/Applitools/status/1015271543209771009">Southwest</a>, <a href="https://twitter.com/EranBarlev/status/1019984879151284224">United</a>, and <a href="https://twitter.com/Applitools/status/1112738531376394240">Virgin Atlantic</a>. And, you’d miss subtleties like the brand logo, or the red dot under the heart.</p>
            <p>But it gets worse: if OS, browser, screen orientation, screen size, or font size changes, your app’s appearance will change as a result. That means you have to write another 105 lines of functional test assertions. For EACH combination of OS/browser/font size/screen size/screen orientation/font size.</p>
            <p>You could end up with thousands of lines of assertion code — any of which might need to change with a new release. Trying to maintain that would be sheer madness. No one has time for that.</p>
            <p>You need visual testing because visual errors occur. And you need visual testing because you cannot rely on functional tests to catch visual errors.</p>
            <h2>What is Manual Visual Testing?</h2>
            <p>Because automated functional testing tools are poorly suited for finding visual bugs, companies find visual glitches using manual testers. Lots of them (more on that in a bit).</p>
            <p>For these manual testers, visual testing behaves a lot like this spot-the-difference game:</p>
            <p>To understand how time-consuming visual testing can be, get out your phone and time how long it takes for you to find all six visual differences. I took a minute to realize that the writing in the panels doesn’t count. It took me about 3 minutes to spot all six. Or, you can cheat and look at the answers.</p>
            <p>Why does it take so long? Some differences are difficult to spot. In other cases, our eyes trick us into finding differences that don’t exist.</p>
            <p>Manual visual testing means comparing two screenshots, one from your known good baseline image, and another from the latest version of your app. For each pair of images, you have to invest time to ensure you’ve caught all issues. Especially if the page is long, or has a lot of visual elements. Think “Where’s Waldo”…</p>
            <h3>Challenges of manual testing</h3>
            <p>If you’re a manual tester or someone who manages them, you probably know how hard it is to visually test.</p>
            <p>If you are a test engineer reading this paragraph, you already know this: web page testing only starts with checking the visual elements and their function on a single operating system, browser, browser orientation, and browser dimension combination. Then continue on to other combinations. And, that’s where a huge amount of test effort lies – not in the functional testing, but in the inspection of visual elements across the combination of an operating system, browser, screen orientation, and browser dimensions.</p>
            <p>To put it in perspective, imagine you need to test your app on:</p>
            <ul>
            <li>5 operating systems: Windows, MacOS, Android, iOS, and Chrome.</li>
            <li>5 popular browsers: Chrome, Firefox, Internet Explorer (Windows only) Microsoft Edge (Windows Only), and Safari (Mac only).</li>
            <li>2 screen orientations for mobile devices: portrait and landscape.</li>
            <li>10 standard mobile device display resolutions and 18 standard desktop/laptop display resolutions from XGA to 4G.</li>
            </ul>
            <p>If you’re doing the math, you think it’s the browsers running on each platform (a total of 21 combinations) multiplied by the two orientations of the ten mobiles (2×10)=20 added to the 18 desktop display resolutions.</p>
            <p><strong>21 x (20+18) = 21 x 38 = 798 Unique Screen Configurations to test</strong></p>
            <p>That’s a lot of testing — for just one web page or screen in your mobile app.</p>
            <p>Except that it’s worse. Let’s say your app has 100 pages or screens to test.</p>
            <p><strong>798 Screen Configurations x 100 Screens in-app = 79,800 Screen Configurations to test</strong></p>
            <p>Meanwhile, companies are releasing new app versions into production as frequently as once a week, or even once a day.</p>
            <p>How many manual testers would you need to test 79,800 screen configurations in a week? Or a day? Could you even hire that many people?</p>
            <p>Wouldn’t it be great if there was a way to automate this crazy-tedious process?</p>
            <p>Well, yes there is…</p>
            <h2>What is Automated Visual Testing?</h2>
            <p>Automated visual testing uses software to automate the process of comparing visual elements across various screen combinations to uncover visual defects.</p>
            <p>Automated visual testing piggybacks on your existing functional test scripts running in a tool like <a href="https://www.seleniumhq.org/projects/webdriver/">Selenium Webdriver</a>, <a href="https://www.cypress.io/">Cypress</a>, <a href="https://webdriver.io/">WebdriverIO</a>, or <a href="http://appium.io/">Appium</a>. As your script drives your app, your app creates web pages with static visual elements. Functional testing changes visual elements, so each step of a functional test creates a new UI state you can visually test.</p>
            <p>Automated visual testing evolved from functional testing. Rather than descending into the madness of writing assertions to check the properties of each visual element, automated visual testing tools visually check the visual appearance of an entire screen with just one assertion statement. This leads to test scripts that are MUCH simpler and easier to maintain.</p>
            <p>But, if you’re not careful, you can go down an unproductive rat hole. I’m talking about <strong>Snapshot Testing</strong>.</p>
            <h3>What is Snapshot Testing?</h3>
            <p>First generation automated visual testing uses a technology called <em><strong>snapshot testing</strong></em>. With snapshot testing, a bitmap of a screen is captured at various points of a test run and its pixels are compared to a baseline bitmap.</p>
            <p>Snapshot testing algorithms are very simplistic: iterate through each pixel pair, then check if the color hex code is the same. If the color codes are different, raise a visual bug.</p>
            <p>Because they can be built relatively easily, there are a number of open-source and commercial snapshot testing tools. Unlike human testers, snapshot testing tools can spot pixel differences quickly and consistently. And that’s a step forward. A computer can highlight the visual differences in the Hocus Focus cartoon easily. A number of these tools market themselves as enabling “pixel perfect testing”.</p>
            <p>Sounds like a good idea, right?</p>
            <h3>What are Problems With Snapshot Testing?</h3>
            <p>Alas, pixels aren’t visual elements. Font smoothing algorithms, image resizing, graphics cards, and even rendering algorithms generate pixel differences. And that’s just static content. The actual content can vary between any two interfaces. As a result, a tool that expects exact pixel matches between two images can be filled with pixel differences.</p>
            <p>If you want to see some examples of bitmap differences affecting snapshot testing, take a look at <a href="https://applitools.com/blog/why-screenshot-image-comparison-tools-fail">the blog post we wrote on this topic last year</a>.</p>
            <p>Unfortunately, while you might think snapshot testing makes intuitive sense, practitioners like you are finding that the conditions for running successful bitmap comparisons require a stationary target, while your company continues to develop dynamic websites across a range of browsers and operating systems. You can try to force your app to behave a certain way – but you may not always succeed.</p>
            <h3>Can you share some details of Snapshot Testing Problems?</h3>
            <p>For example, when testing on a single browser and operating system:</p>
            <ul>
            <li>Identify and isolate (mute) fields that change over time, such as radio signal strength, battery state, and blinking cursors.</li>
            <li>Ignore user data that might otherwise change over time, such as visitor count.</li>
            <li>Determine how to support testing content on your site that must change frequently – especially if you are a media company or have an active blog.</li>
            <li>Consider how different hardware or software affects antialiasing.</li>
            </ul>
            <p>When doing <strong>cross-browser testing</strong>, you must also consider:</p>
            <ul>
            <li>Text wrapping, because you cannot guarantee the locations of text wrapping between two browsers using the same specifications. The text can break differently between two browsers, even with identical screen size.</li>
            <li>Image rendering software, which can affect the pixels of font antialiasing as well as images and can vary from browser to browser (and even on a single browser among versions).</li>
            <li>Image rendering hardware, which may render bitmaps differently.</li>
            <li>Variations in browser font size and other elements that affect the text.</li>
            </ul>
            <p>If you choose to pursue snapshot testing in spite of these issues, don’t be surprised if you end up joining the group of <a href="https://medium.com/@tomgold_48918/why-i-stopped-using-snapshot-testing-with-jest-3279fe41ffb2">experienced testers who have tried, and then ultimately abandoned, snapshot testing tools</a>.</p>
            <h3>Can I See Some Snapshot Testing Problems In Real Life?</h3>
            <p>Here are some quick examples of these real-life bitmap issues.</p>
            <p>If you use pixel testing for mobile apps, you’ll need to deal with the very dynamic data at the top of nearly every screen: network strength, time, battery level, and more:</p>
            <p>When you have dynamic content that shifts over time — news, ads, user-submitted content — where you want to check to ensure that everything is laid out with proper alignment and no overlaps. Pixel comparison tools can’t test for these cases. Twitter’s user-generated content is even more dynamic, with new tweets, like, retweet, and comment counts changing by the second.</p>
            <p>Your app doesn’t even need to change to confuse pixel tools. If your baselines and test screenshots were captured on different machines with different <a href="https://en.wikipedia.org/wiki/Spatial_anti-aliasing">display settings for anti-aliasing</a>, that can turn pretty much the entire page into a false positive, like this:</p>
            <p>Source: storybook.js.org</p>
            <p>If you’re using pixel tools and you still have to track down false positives and expose false negatives, what does that say about your testing efficiency?</p>
            <p>For these reasons, many companies throw out their pixel tools and go back to manual visual testing, with all of its issues.</p>
            <p>There’s a better alternative: using AI — specifically computer vision — for visual testing.</p>
            <h2>How Do I Use AI for Automated Visual Testing?</h2>
            <p>The current generation of automated visual testing uses a class of artificial intelligence algorithms called <a href="https://blog.algorithmia.com/introduction-to-computer-vision/">computer vision</a> as a core engine for visual comparison. Typically these algorithms are used to identify objects with images, such as with facial recognition. We call them visual AI testing tools.</p>
            <p>AI-powered automated visual testing combines a learning algorithm to interpret the relationship between a rendered page and intended display of visual elements with actual visual elements and locations. Like pixel tools, AI-powered automated visual testing takes page snapshots as your functionally tests run. Unlike pixel-based comparators, AI-powered automated visual test tools use algorithms instead of pixels to determine when errors have occurred.</p>
            <p>Unlike snapshot testers, AI-powered automated visual testing tools do not need special environments that remain static to ensure accuracy. Testing and real-world customer data show that AI testing tools have a high degree of accuracy even with dynamic content because the comparisons are based on relationships and not simply pixels.</p>
            <p>Here’s a comparison of the kinds of issues that AI-powered visual testing tools can handle compared to snapshot testing tools:</p>

            <table id="tablepress-1" class="tablepress tablepress-id-1">
            <thead>
            <tr class="row-1 odd">
                <th class="column-1">Visual Testing Use Case</th><th class="column-2">Snapshot Testing</th><th class="column-3">Visual AI</th>
            </tr>
            </thead>
            <tbody class="row-hover">
            <tr class="row-2 even">
                <td class="column-1">Cross-browser testing</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            <tr class="row-3 odd">
                <td class="column-1">Account balances</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            <tr class="row-4 even">
                <td class="column-1">Mobile device status bars</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            <tr class="row-5 odd">
                <td class="column-1">News content</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            <tr class="row-6 even">
                <td class="column-1">Ad content</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            <tr class="row-7 odd">
                <td class="column-1">User submitted content</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            <tr class="row-8 even">
                <td class="column-1">Suggested content</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            <tr class="row-9 odd">
                <td class="column-1">Notification icons</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            <tr class="row-10 even">
                <td class="column-1">Content shifts</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            <tr class="row-11 odd">
                <td class="column-1">Mouse hovers</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            <tr class="row-12 even">
                <td class="column-1">Cursors</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            <tr class="row-13 odd">
                <td class="column-1">Anti-aliasing settings</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            <tr class="row-14 even">
                <td class="column-1">Browser upgrades</td><td class="column-2">No</td><td class="column-3">Yes</td>
            </tr>
            </tbody>
            </table>
            <p>Some AI-powered test tools have been tested at a false positive rate of 0.001% (or 1 in every 100,000 errors).</p>
            <h3>AI-Powered Test Tools In Action</h3>
            <p>An AI-powered automated visual testing tool can test a wide range of visual elements across a range of OS/browser/orientation/resolution combinations. Just running the first baseline of rendering and functional test on a single combination is sufficient to guide an AI-powered tool to test results across the range of potential platforms</p>
            <p>Here are some examples of how AI-powered automated visual testing improves visual test results by awareness of content.</p>
            <p>This is a comparison of two different USA Today homepage images. When an AI-powered tool looks at the layout comparison, the layout framework matters, not the content. Layout comparison ignores content differences; instead, layout comparison validates the existence of the content and relative placement. Compare that with a bitmap comparison of the same two pages (also called “exact comparison:):</p>
            <p>Literally, every non-white space (and even some of the white space) is called out.</p>
            <p>Which do you think would be more useful in your validation of your own content?</p>
            <h2>When Should I Use Visual Testing?</h2>
            <p>You can do automated visual testing with each check-in of front-end code, after <a href="https://en.wikipedia.org/wiki/Unit_testing">unit testing</a> and <a href="https://en.wikipedia.org/wiki/API_testing">API testing</a>, and before <a href="https://en.wikipedia.org/wiki/Functional_testing">functional testing</a> — ideally as part of your <a href="https://semaphoreci.com/blog/cicd-pipeline">CI/CD pipeline</a> running in Jenkins, Travis, or another <a href="https://en.wikipedia.org/wiki/Continuous_integration">continuous integration</a> tool.</p>
            <p>How often? On days ending with “y”. 🙂</p>
            <p>Because of the accuracy of AI-powered automated visual testing tools, they can be deployed in more than just functional and visual testing pre-production. AI-powered automated visual testing can help developers understand how visual element components will render across various systems. In addition to running in development, test engineers can also validate new code against existing platforms and new platforms against running code.</p>
            <p>AI-powered tools like Applitools allow different levels of smart comparison.</p>
            <p>AI-powered visual testing tools are a key validation tool for any app or web presence that requires a regular change in content and format. For example, media companies change their content as frequently as twice per hour use AI-powered automated testing to isolate real errors that affect paying customers without impacting. And, AI-powered visual test tools are key tools in the test arsenal for any app or web presence going through brand revision or merger, as the low error rate and high accuracy lets companies identify and fix problems associated with major DOM, CSS and Javascript changes that are core to those updates.</p>
            <h2>Talk to Applitools</h2>
            <p>Applitools is the pioneer and leading vendor in AI-powered automated visual testing. Applitools has a range of options to help you become incredibly productive in application testing. We can help you test components in development. We can help you find the root cause of the visual errors you have encountered. And, we can run your tests on an <a href="https://applitools.com/product-ultrafast-test-cloud/">Ultrafast Grid</a> that allows you to recreate your visual test in one environment across a number of others on various browser and OS configurations. Our goal is to help you realize the vision we share with our customers – you need to create functional tests for only one environment and let Applitools run the validation across all your customer environments after your first test has passed. We’d love to talk testing with you – feel free to <a href="https://applitools.com/contact/">reach out to contact us anytime</a>.</p>
            <h2>More To Read About Visual Testing</h2>
            <p>If you liked reading this, here are some more Applitools posts and webinars for you.</p>
            <ol>
            <li><a href="https://applitools.com/blog/visual-testing-for-mobile-apps/">Visual Testing for Mobile Apps</a> by Angie Jones</li>
            <li><a href="https://applitools.com/blog/visual-ai-hype-or-reality/">Visual Assertions – Hype or Reality?</a> – by Anand Bagmar</li>
            <li><a href="https://applitools.com/blog/many-uses-of-visual-testing/">The Many Uses of Visual Testing</a> by Angie Jones</li>
            <li><a href="https://applitools.com/blog/visual-testing-as-an-aid-to-functional-testing">Visual UI Testing as an Aid to Functional Testing</a> by Gil Tayar</li>
            <li><a href="https://applitools.com/blog/visual-testing-a-guide-for-front-end-developers/">Visual Testing: A Guide for Front End Developers</a> by Gil Tayar</li>
            </ol>
        </>
    );
}