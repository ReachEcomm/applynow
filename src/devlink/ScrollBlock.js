"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ScrollBlock.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-361":{"id":"e-361","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-93","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-362"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0b5e9811-e6a2-c526-6280-26a7ba7aa43e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0b5e9811-e6a2-c526-6280-26a7ba7aa43e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1761104343941},"e-363":{"id":"e-363","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-93","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-364"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0b5e9811-e6a2-c526-6280-26a7ba7aa43d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0b5e9811-e6a2-c526-6280-26a7ba7aa43d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1761104379791}},"actionLists":{"a-93":{"id":"a-93","title":"arrow_up_and_down","actionItemGroups":[{"actionItems":[{"id":"a-93-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"68f834e305ca998e363cce90|694a0936-1785-34c5-3227-b93b3d71a924"},"yValue":5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-93-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"68f834e305ca998e363cce90|694a0936-1785-34c5-3227-b93b3d71a924"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1761104243845}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ScrollBlock({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/68f848369a55aa417d888a1b_Group.png",
  number = "https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/68f84984154d207c1fe22836_Group%20188.png",
  heading = "Apply Online, Quickly and Securely",
  paragraph = "Once you choose the right fit, we’ll finalize your mortgage quickly and efficiently. You can look forward to a stronger, more secure financial future. One of our dedicated agents will reach out right away to discuss your goals and guide you through any questions.",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "margin")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "image_div")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "image_scroll_1")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "number_block")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "image-38")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={number}
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "text_div")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "head_block_scroll")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "how_we_help_h1")}
            tag="h1"
          >
            {heading}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "para_block_new")}
          tag="div"
        >
          <_Builtin.Paragraph className={_utils.cx(_styles, "hwh_p")}>
            {paragraph}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "arrow_down")}
        data-w-id="0b5e9811-e6a2-c526-6280-26a7ba7aa43d"
        tag="div"
      >
        <_Builtin.Image
          data-w-id="0b5e9811-e6a2-c526-6280-26a7ba7aa43e"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/68f851663aefb90447305a11_Vector%20(8).svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}
