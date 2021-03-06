const XML_SCHEMA = `
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

<xs:element name="emr">
    <xs:complexType>
        <xs:sequence>
            <xs:element maxOccurs="unbounded" ref="member"/>
            <xs:element maxOccurs="unbounded" ref="physician"/>
            <xs:element maxOccurs="unbounded" ref="employee"/>
      </xs:sequence>
    </xs:complexType>
</xs:element>   

<xs:element name="member">
    <xs:complexType>
        <xs:sequence>
            <xs:element type="xs:string" name="firstname"/>
            <xs:element type="xs:string" name="lastname"/>
            <xs:element type="xs:string" name="gender"/>
            <xs:element name="age" type="xs:integer"/>
            <xs:element name="weight" type="xs:decimal"/>
            <xs:element type="xs:string" name="dob"/>
            <xs:element type="xs:string" name="address"/>
            <xs:element type="xs:int" name="phonenumber"/>
            <xs:element ref="medicalHistory"/>
        </xs:sequence>
        <xs:attribute name="id" use="required" type="xs:string"/>
    </xs:complexType>
</xs:element>

<xs:element name="medicalHistory">
    <xs:complexType>
        <xs:sequence>
            <xs:element  maxOccurs="unbounded" ref="medication"/>
            <xs:element  maxOccurs="unbounded" ref="immunisation"/>
            <xs:element  ref="consultation"/>
            <xs:element  ref="prescription"/>
        </xs:sequence>
    </xs:complexType>
</xs:element>

<xs:element name="medication">
    <xs:complexType>
        <xs:sequence>
            <xs:element name = "name"  type = "xs:string"/>
        </xs:sequence>
    </xs:complexType>
</xs:element>

<xs:element name="immunisation">
    <xs:complexType>
        <xs:sequence>
            <xs:element name="title"  type="xs:string"/>
            <xs:element name="status" type="xs:string"/>
        </xs:sequence>
    </xs:complexType>
</xs:element>

<xs:element name="consultation">
    <xs:complexType>
        <xs:sequence>
            <xs:element name="title" type="xs:string"/>
            <xs:element name="attendingPhysician" type="xs:string"/>
            <xs:element name="prescription" type="xs:string"/>
        </xs:sequence>
    </xs:complexType>

    <xs:key name="attendingPhysicianKey"  >  
        <xs:selector xpath=".//Physician" />  
        <xs:field xpath="id" />  
    </xs:key>  

    <!-- <xs:keyref name="attendingPhysicianRef" refer="attendingPhysicianKey">  
        <xs:selector xpath=".//consultation" />  
        <xs:field xpath="attendingPhysician" />  
    </xs:keyref>  

    <xs:key name="prescriptionKey"  >  
        <xs:selector xpath=".//prescription" />  
        <xs:field xpath="id" />  
    </xs:key>  

    <xs:keyref name="prescriptionRef" refer="prescriptionKey">  
        <xs:selector xpath=".//consultation" />  
        <xs:field xpath="prescription" />  
    </xs:keyref>   -->

</xs:element>

<xs:element name="prescription">
    <xs:complexType>
        <xs:sequence>
            <xs:element name="cost" type="xs:decimal"/>
            <xs:element maxOccurs = "unbounded" name="item" type="xs:string"/>
            <xs:element name="issuedBy" type="xs:string"/>
            <xs:element name="handledBy" type="xs:string"/>
        </xs:sequence>
        <xs:attribute name="id" use="required" type="xs:string"/>
    </xs:complexType>

    <!-- <xs:key name="PhysicianKey"  >  
        <xs:selector xpath=".//Physician" />  
        <xs:field xpath="id" />  
    </xs:key>  

    <xs:keyref name="PhysicianRef" refer="PhysicianKey">  
        <xs:selector xpath=".//prescription" />  
        <xs:field xpath="issuedBy" />  
    </xs:keyref> 

    <xs:key name="EmployeeKey"  >  
        <xs:selector xpath=".//employee" />  
        <xs:field xpath="id" />  
    </xs:key>  

    <xs:keyref name="EmployeeRef" refer="EmployeeKey">  
        <xs:selector xpath=".//employee" />  
        <xs:field xpath="handledBy" />  
    </xs:keyref>  -->
</xs:element>

<xs:element name="physician">
    <xs:complexType>
        <xs:sequence>
            <xs:element name="name" type="xs:string"/>
            <xs:element name="specialty" type="xs:string"/>
        </xs:sequence>
    <xs:attribute name="id" use="required" type="xs:string"/>
    </xs:complexType>
</xs:element>

<xs:element name="employee">
    <xs:complexType>
        <xs:sequence>
            <xs:element name="name" type="xs:string"/>
        </xs:sequence>
        <xs:attribute name="id" use="required" type="xs:string"/>
    </xs:complexType>
</xs:element>
</xs:schema>
`;
 
const Xsd2JsonSchema = require('xsd2jsonschema').Xsd2JsonSchema;
const xs2js = new Xsd2JsonSchema();
 
const convertedSchemas = xs2js.processAllSchemas({
    schemas: {'emr.xsd': XML_SCHEMA}
});
const jsonSchema = convertedSchemas['emr.xsd'].getJsonSchema();
console.log(JSON.stringify(jsonSchema, null, 2));