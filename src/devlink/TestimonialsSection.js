"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./TestimonialsSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-342":{"id":"e-342","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInTop","autoStopEventId":"e-343"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8c4a9ee9-ff9f-f6d3-bd7c-833a6c0c1aab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8c4a9ee9-ff9f-f6d3-bd7c-833a6c0c1aab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"TOP","effectIn":true},"createdOn":1759983850335}},"actionLists":{"slideInTop":{"id":"slideInTop","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":-100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TestimonialsSection({
  as: _Component = _Builtin.Section,
  title = "Why Client's Love Working With Us",
  subText = "Join thousands of homeowner's who trusted us when they needed it most.",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "testimonial_section")}
      data-w-id="8c4a9ee9-ff9f-f6d3-bd7c-833a6c0c1aab"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "mainbodyheading-dark")}
        tag="h1"
      >
        {title}
      </_Builtin.Heading>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-77")} tag="div">
        <_Builtin.Paragraph className={_utils.cx(_styles, "grid_para-copy")}>
          {subText}
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "container-73")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.BlockContainer>
    </_Component>
  );
}
