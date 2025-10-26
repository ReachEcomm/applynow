"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NewMenu.module.css";

export function NewMenu({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav_main")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "margins_nav")} tag="div">
        <_Builtin.NavbarWrapper
          className={_utils.cx(_styles, "navbar-3")}
          tag="div"
          config={{
            animation: "default",
            collapse: "medium",
            docHeight: false,
            duration: 400,
            easing: "ease",
            easing2: "ease",
            noScroll: false,
          }}
        >
          <_Builtin.NavbarContainer
            className={_utils.cx(_styles, "container-75")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "brand-2")}
              options={{
                href: "https://www.lighthouselending.ca/",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-35")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/6866892f7dca044a867432a6_LighthouseLending-RemadeLogo-2025-Navy%403x.webp"
              />
            </_Builtin.NavbarBrand>
            <_Builtin.NavbarMenu
              className={_utils.cx(_styles, "nav-menu-3")}
              tag="nav"
              role="navigation"
            >
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "dropdown-4")}
                tag="div"
                delay={0}
                hover={true}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "dropdown-toggle-5")}
                  tag="div"
                >
                  <_Builtin.Icon
                    className={_utils.cx(_styles, "icon-6")}
                    widget={{
                      type: "icon",
                      icon: "dropdown-toggle",
                    }}
                  />
                  <_Builtin.Link
                    className={_utils.cx(_styles, "menu_text")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"All Services"}
                  </_Builtin.Link>
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(_styles, "dropdown-list-6")}
                  tag="nav"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-20")}
                    tag="div"
                  >
                    <_Builtin.NotSupported _atom="DynamoWrapper" />
                  </_Builtin.Block>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "menu_text")}
                options={{
                  href: "#",
                }}
              >
                {"Our Process"}
              </_Builtin.NavbarLink>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "menu_text")}
                options={{
                  href: "#",
                }}
              >
                {"Our Team"}
              </_Builtin.NavbarLink>
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "dropdown-5")}
                tag="div"
                delay={0}
                hover={true}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "dropdown-toggle-6")}
                  tag="div"
                >
                  <_Builtin.Icon
                    className={_utils.cx(_styles, "icon-7")}
                    widget={{
                      type: "icon",
                      icon: "dropdown-toggle",
                    }}
                  />
                  <_Builtin.Link
                    className={_utils.cx(_styles, "menu_text")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Calculate Your Rate"}
                  </_Builtin.Link>
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(_styles, "dropdown-list-5")}
                  tag="nav"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-65")}
                    tag="div"
                  >
                    <_Builtin.NotSupported _atom="DynamoWrapper" />
                  </_Builtin.Block>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "menu_text")}
                options={{
                  href: "#",
                }}
              >
                {"Contact Us"}
              </_Builtin.NavbarLink>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "phone_text-new")}
                options={{
                  href: "tel:(905)234-3323",
                }}
              >
                {"(905) 234-3323"}
              </_Builtin.NavbarLink>
            </_Builtin.NavbarMenu>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-78")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "yellow_buttom_slider")}
                button={true}
                block=""
                options={{
                  href: "/landing-pages/apply",
                }}
              >
                {"Apply Today"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "menu-button-5")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon-5")}
                widget={{
                  type: "icon",
                  icon: "nav-menu",
                }}
              />
            </_Builtin.NavbarButton>
          </_Builtin.NavbarContainer>
        </_Builtin.NavbarWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
