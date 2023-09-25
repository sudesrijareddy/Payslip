import React from 'react';

function Payslip() {
  const payslipdata =   [
        {
         "EmployeeNo": 1230,
         "Name": "Srija Reddy",
         "JoinDate": "June2022",
         "EffectiveWorkDays": 21,
         "DaysInMonth": 22,
         "Designation": "Developer",
         "Department": "Engineering",
         "Location": "Hyderabad",
         "BankName": "HDFC",
         "BankAccountNumber": 165765487387,
         "Basic": 35000,
         "HRA": 1500,
         "MedicalAllowance": 1600,
         "TransportAllowance": 1600,
         "SpecialAllowance": 1600,
         "PF": 1800,
         "PFNO":6775698906,
         "PFUAN":"UAN67589540",
         "ESINo":67859849,
         "PANNo":"PSJ54678",
         "ProfTax": 500,
         "LOP" : 54674,
         "TotalEarnings": 30000,
         "TotalDeductions": 1500
        }
       ]
    return(
        <div>
       <div style={{width:"70%",marginLeft:"auto",marginRight:"auto",border:"2px solid black"}}>
         <div style={{display:"flex",justifyContent:"space-around"}}>
             <div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8XCeMKBSPPdeifZ7konWRVct2OheFqkF13zzJ5ZQJ6w&s"/>
             </div>
             <div>
             <h2>Mantra Technologies Pvt.Ltd.</h2>
                 <p>1st fllor,vertex corporate building,jubliee enclave,HITEX madhapur,Hyderabad,500081,p:(040) 298005467</p>
                  <h2>PaySlip for month of july 2023</h2>
             </div>
         </div>
         <div style={{display:"flex",borderTop:"2px solid black"}}>
            <div style={{textAlign:"start",width:"650px",paddingLeft:"10px"}}>

            <p>Name: <strong>{payslipdata[0].Name}</strong></p>
                <p>Join Date: <strong>{payslipdata[0].JoinDate}</strong></p>
                <p>Designation: <strong>{payslipdata[0].Designation}</strong></p>
                <p>Department: <strong>{payslipdata[0].Department}</strong> </p>
                <p>Location : <strong>{payslipdata[0].Location}</strong></p>
                <p>Effective Work Days: <strong>{payslipdata[0].EffectiveWorkDays}</strong></p>
                <p>Days In Month: <strong>{payslipdata[0].DaysInMonth}</strong></p> 
            </div>
            <div style={{textAlign:"start",width:"650px",paddingLeft:"10px",borderLeft:"2px solid black"}}>
            <p>Bank Name:<strong>{payslipdata[0].BankName}</strong></p>
                <p>Bank Account No: <strong>{payslipdata[0].BankAccountNumber}</strong></p>
                <p>PF No: <strong>{payslipdata[0].PFNO}</strong></p>
                <p>PF UAN: <strong>{payslipdata[0].PFUAN}</strong></p>
                <p>ESI No : <strong>{payslipdata[0].ESINo}</strong></p>
                <p>PAN No: <strong>{payslipdata[0].PANNo}</strong></p>
                <p>LOP: <strong>{payslipdata[0].LOP}</strong></p> 
            </div>
         </div>
         <div style={{display:"flex",borderTop:"2px solid black"}}>
            <div style={{display:"flex",width:"650px",paddingLeft:"10px",justifyContent:"space-between"}}>
            <h5>Earnings</h5>
                <h5 style={{paddingRight:"10px"}}>Actual</h5>
            </div>
            <div style={{display:"flex",width:"650px",paddingLeft:"10px",justifyContent:"space-between",borderLeft:"2px solid black"}}>
            <h5>Deductions</h5>
                <h5 style={{paddingRight:"10px"}}>Actual</h5>
            </div>
         </div>
         <div style={{display:"flex",borderTop:"2px solid black"}}>
            <div style={{textAlign:"start",width:"650px",paddingLeft:"10px"}}>

                <p>BASIC: <strong>{payslipdata[0].Basic}</strong></p>
                <p>HRA: <strong>{payslipdata[0].HRA}</strong></p>
                <p>MEDICAL ALLOWANCE: <strong>{payslipdata[0].MedicalAllowance}</strong></p>
                <p>TRANSPORT ALLOWANCE: <strong>{payslipdata[0].TransportAllowance}</strong> </p>
                <p>SPECIAL ALLOWANCE : <strong>{payslipdata[0].SpecialAllowance}</strong></p>
                
            </div>
            <div style={{textAlign:"start",width:"650px",paddingLeft:"10px",borderLeft:"2px solid black"}}>
            <p>Bank Name:<strong>{payslipdata[0].BankName}</strong></p>
                <p>PF: <strong>{payslipdata[0].PF}</strong></p>
                <p>PROF TAX: <strong>{payslipdata[0].ProfTax}</strong></p>
                 
            </div>
         </div>
         <div style={{display:"flex",borderTop:"2px solid black"}}>
            <div>
            <p>Total Earnings:INR.{payslipdata.TotalEarnings}</p>
            </div>
            <div>
            <p>TotalDeductions:INR.{payslipdata.TotalDeductions}</p>
            </div>
         </div>
       </div>
       <button style={{padding:"10px",marginTop:"20px"}} onClick={(e)=>window.print()}>Submit</button>
       </div>
         
);
}
export default Payslip;