import React from "react";

function Myabout()
{
    return <h1> This is the default import function</h1>
}
export default Myabout

export function Myabout1()
{
    return <h2> This is name export function1</h2>
}

export function Myabout2()
{
    return <p> This is the third export function</p>
}

export function Myabout3()
{
    return<div>
        <p> This is the react application project</p>
<p> Author: <b>Ayush Pandey</b></p>
    </div>
}
export function Myabout4()
{
    return(
        <div>
<ul>
    <li>Name</li>
    <li>Contacts</li>
    <li>Emergency</li>
</ul>
        </div>
    )
}