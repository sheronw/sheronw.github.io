---
title: IMGUI 中文支持方案
tags: [折腾记录]
---

没学过 c++，单纯想头铁汉化个东西，就查资料折腾了一下，这里做一个小的总结。如果有更好的方案请指正。

## 加载字体

首先需要加载支持中文的字体。
网上最多的解决方案是读取外部的`.ttf/.otf`字体，亲测可用。但需要用户的目录读取权限，而且可能出现字体不存在的情况。
对于源码内嵌字体，IMGUI 的作者其实也给出了一个解决方案：[将 binary 转换为 C array 的工具](https://github.com/ocornut/imgui/blob/0738611559b0a51c7fa0c376eb9601587231f841/misc/fonts/binary_to_compressed_c.cpp)。如果软件只是使用拉丁字集的话，文件不大应该也没什么问题，我打算汉化的软件本身用的也是这个解决方案，但将中文字集转换为 C Array 的话大小至少是西文字集的几千倍吧。

```c++
ImGuiIO& io = ImGui::GetIO();
IMFont* ttf_font = io.Fonts->AddFontFromFileTTF("res/simhei.ttf", 16.0f, Null, io.Fonts->GetGlyphRangesChinese());
IMFont* compressed_font = io.Fonts->AddFontFromMemoryCompressedTTF(SimHei_compressed_data,SimHei_compressed_size, 16.f, Null, io.Fonts->GetGlyphRangesChinese());
```

这里解释一下，`GetGlyphRangesChinese()` 用来指定加载字符集，我需要改动的软件基于 IMGUI 1.4，所以只有这个方法，在更新的版本中，这个被加载常用汉字的`GetGlyphRangesChineseSimplifiedCommon()`和加载所有汉字的`GetGlyphRangesChineseFull()`所取代。

## 汉字编码

如果是 c++11，直接给中文字符串添加`u8`前缀就可以了，源代码本身应该也是`UTF-8`。之前的版本可以上网找个转换函数复制下来用。

## 调整 OverSampling 配置

参考 [Github 上的这个 Issue](https://github.com/ocornut/imgui/issues/1434#issuecomment-344205472)。之前提到过中文字集特别占内存，而 IMGUI 的字体基于 FontAlas，至少在我这个版本（1.4）中不能动态加载，所以可能编译跑起来之后发现满屏黑白方块。
在作者提供的解决办法中，其中看起来最简单粗暴的方法是减少 OverSampling。

```c++
ImFontConfig config_words;
config_words.OversampleV = 1;
config_words.OversampleH = 1; // 默认为3
font_14 = io.Fonts->AddFontFromMemoryCompressedTTF(SimHei_compressed_data,SimHei_compressed_size, 16.f, &config_words, io.Fonts->GetGlyphRangesChinese());
```

除此之外还可以请求 Alpha Texture （超出我能力范围了 QvQ）或者手动缩小 glyphRange ，只保留自己用到的字符。
