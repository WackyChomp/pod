import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
//import logoColorYellow from './src/assets/logoColorYellow.svg';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src='https://media.tenor.com/eqsvEtsUXlMAAAAC/stalzone-stalfos.gif' alt="Refine" width="45px" />
        ) : (
          <img src='https://media.tenor.com/eqsvEtsUXlMAAAAC/stalzone-stalfos.gif' alt="Refine" height='40px' width="170px" />
        )}
      </Link>
    </Button>
  );
};
