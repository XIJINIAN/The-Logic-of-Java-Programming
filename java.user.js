// ==UserScript==
// @name          Java 编程的逻辑
// @namespace     http://userstyles.org
// @description   《Java 编程的逻辑》在线阅读
// @author        西纪年
// @homepage      https://userstyles.org/styles/167308
// @include       http://www.cnblogs.com/swiftma/p/*
// @include       https://www.cnblogs.com/swiftma/p/*
// @include       http://www.cnblogs.com/swiftma/p/5631311.html*
// @include       https://www.cnblogs.com/swiftma/p/5631311.html*
// @run-at        document-start
// @version       0.20181228150853
// ==/UserScript==
(function() {var css = "";
if (false || (document.location.href.indexOf("http://www.cnblogs.com/swiftma/p/") == 0) || (document.location.href.indexOf("https://www.cnblogs.com/swiftma/p/") == 0))
    css += [
        ".cnblogs_code :not([class*=\"icon\"]):not(i):not(p):not(h1) {",
        "    font-family: Monaco, \"Input Mono\", \"PT Mono\", Consolas, Menlo, monospace !important;",
        "    font-size: 14px !important;",
        "}",
        "",
        "#header {",
        "    display: none;",
        "}",
        "",
        "#footer {",
        "    display: none;",
        "}",
        "",
        "#blog_post_info_block {",
        "    display: none;",
        "}",
        "",
        ".postDesc {",
        "    display: none;",
        "}",
        "",
        ".cnblogs_code_copy {",
        "    display: none;",
        "}",
        "",
        ".commentform {",
        "    display: none;",
        "}",
        "",
        "#sideBar {",
        "    width: 0px;",
        "    height: 0px;",
        "    padding: 0px;",
        "}",
        "",
        "#main {",
        "    width: 765px;",
        "    margin-top: 0px;",
        "    background-color: rgba(0, 0, 0, 0.0);",
        "    margin-bottom: 0px;",
        "}",
        "",
        "#mainContent {",
        "    margin-top: 20px;",
        "}",
        "",
        "#blog-comments-placeholder {",
        "    display: none;",
        "}",
        "",
        "#cnblogs_post_body > p:nth-child(1) > strong span[style*=\"color: #0000ff\"] {",
        "    display: none;",
        "}",
        "",
        "img[src=\"https://images2017.cnblogs.com/blog/924211/201802/924211-20180201085836265-416315605.jpg\"] {",
        "    display: none;",
        "}",
        "",
        "img[src=\"https://images2015.cnblogs.com/blog/924211/201605/924211-20160507122741935-343359744.jpg\"] {",
        "    display: none;",
        "}",
        "",
        "img[src=\"https://images2017.cnblogs.com/blog/924211/201802/924211-20180202161054859-999804045.jpg\"] {",
        "    display: none;",
        "}",
        "",
        "img[src=\"http://img.blog.csdn.net/20160329204821167\"] {",
        "    display: none;",
        "}",
        "",
        "#cnblogs_post_body > p:nth-last-child(-n+3) {",
        "    display: none;",
        "}"
    ].join("\n");
if (false || (document.location.href.indexOf("http://www.cnblogs.com/swiftma/p/5631311.html") == 0) || (document.location.href.indexOf("https://www.cnblogs.com/swiftma/p/5631311.html") == 0))
    css += [
        "#cnblogs_post_body > p:nth-child(1) {",
        "    display: none;",
        "}",
        "",
        "#cnblogs_post_body > p:nth-child(2) {",
        "    display: none;",
        "}",
        "",
        "#cnblogs_post_body > p:nth-child(3) {",
        "    display: none;",
        "}",
        "",
        "#cnblogs_post_body > p:nth-child(4) {",
        "    display: none;",
        "}",
        "",
        "#cnblogs_post_body > p:nth-child(6) {",
        "    display: none;",
        "}",
        "",
        "#cnblogs_post_body > p:nth-last-child(-n+4) {",
        "    display: none;",
        "}"
    ].join("\n");
if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
    PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
    addStyle(css);
} else {
    var node = document.createElement("style");
    node.type = "text/css";
    node.appendChild(document.createTextNode(css));
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        heads[0].appendChild(node);
    } else {
        // no head yet, stick it whereever
        document.documentElement.appendChild(node);
    }
}
})();
