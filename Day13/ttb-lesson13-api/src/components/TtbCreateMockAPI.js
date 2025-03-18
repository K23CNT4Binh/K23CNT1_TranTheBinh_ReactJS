import React from 'react'

export default function TtbCreateMockAPI() {
  return (
    <div className='alert alert-primary'>
      <h2>Them moi du lieu</h2>
      <hr/>
      <form>
        <div>
            <label for="ttbfullName">FullName</label>
            <input type='text' name='ttbfullName' id="ttbfullName"/>
        </div>
        <div>
            <label for="ttbAge">Age</label>
            <input type='number' name='ttbAge' id="ttbAge"/>
        </div>
        <div>
            <label for="ttbActive">Actice</label>
            <input type='radio' name='ttbActive' id="ttbActive_hd "value={'true'}/>
                <label for='ttbActive_hd'>Hoạt động</label>
            <input type='radio' name='ttbActive' id="ttbActive_kh "value={'false'}/>
                <label for='ttbActive_hd'>Khóa</label>
        </div>
        <button>Create</button>
      </form>
    </div>
  )
}
