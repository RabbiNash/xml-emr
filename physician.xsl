<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:foo="http://www.foo.org/" xmlns:bar="http://www.bar.org">
<xsl:template match="/">
  <html>
  <body>
  <h2>Physician Listing</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>Physician Name</th>
        <th>Specialty</th>
      </tr>
      <xsl:for-each select="emr/physician">
      <tr>
        <td><xsl:value-of select="name"/></td>
        <td><xsl:value-of select="specialty"/></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>

<!-- physician listing>