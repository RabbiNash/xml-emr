<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">
<xsl:for-each select="emr/member">
  <div style="background-color:white;color:black;padding:4px">
    <span style="font-weight:bold"><xsl:value-of select="firstname"/> <xsl:value-of select="makuti"/>  -  </span>
</div>
<div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
    <xsl:for-each  select="medicalHistory">
        <h3>Medication</h3>
        <xsl:for-each  select="medication">
            <span style="font-weight:bold"><xsl:value-of select="name"/></span>
        </xsl:for-each>
         <h3>Immunisation</h3>
         <xsl:for-each  select="immunisation">
            <span style="font-weight:bold"><xsl:value-of select="title"/></span>
            <span style="font-weight:bold"><xsl:value-of select="status"/></span>
        </xsl:for-each>
    </xsl:for-each>
</div>
</xsl:for-each>
</body>
</html>

<!--show user with corresponding immunisations and medication currently being taken-->