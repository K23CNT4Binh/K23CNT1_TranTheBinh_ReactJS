import React from 'react'

export default function TtbEditUser() {
    const ttbUser = {
            id:0,
            'ttb_name':'',
            'ttb_email':'',
            'ttb_phone':'',
            'ttb_actice':true
        }
        const [ttb_user, setTtb_User] = useState(ttbUser);
       const ttbApi = "https://67e0ab247635238f9aae06d0.mockapi.io/ttb-k23cnt1-tranthebinh-2310900012/ttb_users"
       use
  return (
    <div>
      <h2>Sua thong tin user</h2>
      <form>
        <div className='mb-3 row'>
            <label htmlFor="ttb_name" className="col-sm-2 col-form-label">FullName</label>
            <div className='col-sm-10'>
                <input type="text " className="form-control" id="ttb_name"
                name="ttb_name"
                value={ttb_user.ttb_name}
                onChange={(ev)=>setTtb_User({...ttb_user,ttb_name:ev.target.value})}/> 
            </div>
        </div>

        <div className='mb-3 row'>
            <label htmlFor="ttb_email" className="col-sm-2 col-form-label">Email</label>
            <div className='col-sm-10'>
                <input type="text " className="form-control" id="ttb_email"
                 name="ttb_email"
                 value={ttb_user.ttb_email}
                 onChange={(ev)=>setTtb_User({...ttb_user,ttb_email:ev.target.value})}/> 
            </div>
        </div>

        <div className='mb-3 row'>
            <label htmlFor="ttb_phone" className="col-sm-2 col-form-label">Phone</label>
            <div className='col-sm-10'>
                <input type="text " className="form-control" id="ttb_phone"
                 name="ttb_phone"
                 value={ttb_user.ttb_phone}
                 onChange={(ev)=>setTtb_User({...ttb_user,ttb_phone:ev.target.value})}/> 
            </div>
        </div>

        <div className='mb-3 row'>
            <label htmlFor="ttb_actice" className="col-sm-2 col-form-label">Actice</label>
            <div className='col-sm-10'>
                <input type="radio"  id="ttb_actice_true" className='mx-3'
                    value={true}
                    name="ttb_phone" 
                    onChange={(ev)=>setTtb_User({...ttb_user,ttb_actice:ev.target.value})}/>  
                <label htmlFor="ttb_actice_true">Hoạt động</label>
                <input type="radio"  id="ttb_actice_false" className='mx-3'
                    value={false} 
                    name="ttb_phone" 
                    onChange={(ev)=>setTtb_User({...ttb_user,ttb_actice:ev.target.value})}/>  
                <label htmlFor="ttb_actice_false">Tạm khóa</label>
            </div>
        </div>

        <div className='mb-3 row'>
            <label htmlFor="" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button className='btn btn-primary mx-2 px-3' name='btnTtbCreate'
                onClick={ttbHandleSubmit}
                    >Create</button>
                <button className='btn btn-secondary mx-2 px-3'>Back</button>
            </div>
            </div>
      </form>
    </div>
  )
}
