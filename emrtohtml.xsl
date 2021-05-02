<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">
<xsl:for-each select="emr/member">
  <div style="background-color:white;color:black;padding:4px">
    <span style="font-weight:bold"><xsl:value-of select="firstname"/> <xsl:value-of select="makuti"/>  -  </span>
    <xsl:value-of select="age"/>
    </div>
  <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
    <p>
    <xsl:value-of select="gender"/>
    </p>
  </div>
</xsl:for-each>
</body>
</html>

<!-- for tranforming  the xml  to html showing member details.>