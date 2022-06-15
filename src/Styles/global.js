import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
}
:root{
    --grey-4:#121214;
    --grey-3:#212529;
    --grey-2:#343B41;
    --grey-1:#868E96;
    --grey-0:#F8F9FA;
    --color-primary:#FF577F;
    --color-primary-50:#FF427F;
    --color-primary-Disable:#59323F;
    --Sucess:#3FE864
    --Negative:#E83F5B;
}
body{
    background: var(--grey-4);
    color:var(--grey-0);
}
body, input, button{
    font-family:"Inter";
    font-size: 1rem;
}

h1, h2, h3, h4, h5, h6{
    font-family:"Inter";
    font-weight:700;
}
button{
    cursor: pointer;
}
a{
    text-decoration:none;
}
span{
    font-size:12px;
    color:var(--grey-1)
}`;
