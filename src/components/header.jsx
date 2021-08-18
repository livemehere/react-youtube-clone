import React, { useRef } from 'react'

const Header = (props)=>{
    const inputRef = useRef();

    const search = (e)=>{
        // app.js 로 inputRef값 넘기기...
        props.search(e,inputRef.current.value)
        inputRef.current.value=""
    }
    
    return <div>
        <form onSubmit={search}>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="" width="100" />
            <input type="text" ref={inputRef}/>
            <input type="submit" value="검색" name="search-word" />
        </form>
    </div>
}

export default Header