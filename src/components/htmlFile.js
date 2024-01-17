import React from "react";
import HTMLRenderer from "react-html-renderer";

const htmlFile = ({ props }) => {
  console.log(props);
  const datas = `
  <html>
  <head>
  </head>
  <body>
  <table style="width: 100%; margin: 0 auto; background-color: #fff" border="0" cellpadding="0" cellspacing="0" >
    <tbody>
      <tr>
        <td align="left" valign="top" bgcolor="#FFFFFF"><table width="580" border="0" align="center" cellpadding="0" cellspacing="0" style=" border-collapse: collapse; width: 600px; margin: 0 auto; background-color: #fff; " >
            <tbody>
              <tr>
                <td align="center" valign="top"><table width="600" border="0" cellspacing="0" cellpadding="0" >
                    <tbody>
                      <tr>
                        <td width="10" align="center" valign="top"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/bg_sp_mailer_28_oct-100.jpg" alt="pf" width="600" height="10" style="display: block" />
                          <table width="599" border="0" cellspacing="0" cellpadding="0" >
                            <tbody>
                              <tr style=" display: none; max-height: 0; overflow: hidden; " >
                                <td width="574">&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp; </td>
                              </tr>
                              <tr>
                                <td align="center" valign="top"><table width="600" border="0" cellpadding="0" cellspacing="0" >
                                    <tbody>
                                      <tr>
                                        <td width="600" align="center" valign="middle" style="background-color: #fff" ><a href="https://www.pepperfry.com/?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=logo" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H1_1503_r1.jpg" alt="pepperfry" width="600" height="84" style="display: block" title="pepperfry" border="0" /></a></td>
                                      </tr>
                                    </tbody>
                                  </table></td>
                              </tr>
                              <tr>
                                <td align="center" valign="middle"><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                    <tbody>
                                      <tr>
                                        <td align="left" valign="top"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H2_2x_16March.jpg" width="187" height="24" alt="Furniture" style="display: block" title="Furniture" border="0" /></td>
                                        <td align="left" valign="top"><a href="https://www.pepperfry.com/stores/locator.html??&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=studio" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H3_2x_16March.jpg" width="82" height="24" alt="Furniture" style="display: block" title="Furniture" border="0" /></a></td>
                                        <td align="left" valign="top"><a href="https://blog.pepperfry.com/?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=be_inpired" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H4_2x_16March.jpg" width="58" height="24" alt="Furniture" style="display: block" title="Furniture" border="0" /></a></td>
                                        <td align="left" valign="top"><a href="https://blog.pepperfry.com/?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=header_get_inspired" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H5_2x_16March.jpg" width="72" height="24" alt="Furniture" style="display: block" title="Furniture" border="0" /></a></td>
                                        <td align="left" valign="top"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H6_2x_16March.jpg" width="201" height="24" alt="Furniture" style="display: block" title="Furniture" border="0" /></td>
                                      </tr>
                                    </tbody>
                                  </table></td>
                              </tr>
                              <tr>
                                <td align="center" valign="middle"><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                    <tbody>
                                      <tr>
                                        <td align="left" valign="top"><a href="https://www.pepperfry.com/category/furniture.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=furniture" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H7_2x_16March.jpg" width="127" height="24" alt="Furniture" style="display: block" title="Furniture" border="0" /></a></td>
                                        <td align="left" valign="top"><a href="https://www.pepperfry.com/category/mattresses.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=mattress" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H8_2x_16March.jpg" width="74" height="24" alt="Mattresses" style="display: block" title="Mattresses" border="0" /></a></td>
                                        <td align="left" valign="top"><a href="https://www.pepperfry.com/category/home-decor.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=home_décor" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H9_2x_16March.jpg" width="84" height="24" alt="Home Decor" style="display: block" title="Home Decor" border="0" /></a></td>
                                        <td align="left" valign="top"><a href="https://www.pepperfry.com/category/furnishings.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=furnishings" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H10_2x_16March.jpg" width="78" height="24" alt="Furnishings" style="display: block" title="Furnishings" border="0" /></a></td>
                                        <td align="left" valign="top"><a href="https://www.pepperfry.com/category/kitchen-and-dining.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=kitchen_and_dining" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H11_2x_16March.jpg" width="107" height="24" alt="Kitchen &amp; Dining" style="display: block" title="Kitchen & Dining" border="0" /></a></td>
                                        <td align="left" valign="top"><a href="https://www.pepperfry.com/?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=view_all" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H12_2x_16March.jpg" width="130" height="24" alt="View All" style="display: block" title="View All" border="0" /></a></td>
                                      </tr>
                                    </tbody>
                                  </table></td>
                              </tr>
                              <tr>
                                <td align="center" valign="middle"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/H13_2x_16March.jpg" alt="pf" width="600" height="26" style="display: block" /></td>
                              </tr>
                              <tr>
                                <td align="center" valign="top"><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                    <tbody>
                                      <tr>
                                        <td width="10" align="left" valign="top"><a href="https://www.pepperfry.com/?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Promo_Banner"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/${props.bannerUrl}.jpg" alt="pf" width="600" height="224" style="display: block" border="0" /></a></td>
                                      </tr>
                                      <tr>
                                        <td width="10" align="left" valign="top"><a href="https://www.pepperfry.com/?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Coupon_Strip"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/${props.promoUrl}.jpg" alt="pf" width="600" height="119" style="display: block" border="0" /></a></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="middle"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/bg_sp_mailer_28_oct-100.jpg" alt="pf" width="600" height="20" style="display: block" /></td>
                                      </tr>
                                      <tr>
                                        <td width="10" align="left" valign="top"><a href="https://www.pepperfry.com/product/logan-c-shape-end-table-in-brown-finish-1965078.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=C-Shape_End_Table "><img src="https://im1.pepperfry.com/media/wysiwyg/banners/FD_11_jan.jpg" alt="pf" width="600" height="326" style="display: block" border="0" /></a></td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top"><a href="https://www.pepperfry.com/product/beige-polyster-abstract-polysterabstract-regular-eyelet-2-pc-door-curtains-by-cor-2155754.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=7ft_Door_curtain "><img src="https://im1.pepperfry.com/media/wysiwyg/banners/HD_11_jan.jpg" alt="pf" width="600" height="339" style="display: block" border="0" /></a></td>
                                      </tr>
                                        <tr>
                                        <td align="center" valign="middle"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/bg_sp_mailer_28_oct-100.jpg" alt="pf" width="600" height="10" style="display: block" /></td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top"><a href="https://www.pepperfry.com/pages/brand-bazaar.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Brand_Bazaar"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/BrandBazaar_11_jan.jpg" alt="pf" width="600" height="135" style="display: block" border="0" /></a></td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top"><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/brands/trevi-furniture.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Trevi" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/pro1_11_jan.jpg" alt="pf" width="314" height="365" style="display: block" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/brands/manaiya.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Manaiya" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/pro2_11_jan.jpg" alt="pf" width="286" height="365" style="display: block" border="0" /></a></td>
                                              </tr>
                                            </tbody>
                                          </table></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top"><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/brands/adorn-india.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Adorn" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/pro3_11_jan.jpg" alt="pf" width="315" height="341" style="display: block" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Promo_Credits" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/pro4_11_jan.jpg" alt="pf" width="286" height="341" style="display: block" border="0" /></a></td>
                                              </tr>
                                            </tbody>
                                          </table></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top"><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/brands/neudot.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Neudot" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/pro5_11_jan.jpg" alt="pf" width="315" height="341" style="display: block" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/brands/sleepycat.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Sleepy_Cat" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/pro6_11_jan.jpg" alt="pf" width="286" height="341" style="display: block" border="0" /></a></td>
                                              </tr>
                                            </tbody>
                                          </table></td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top"><a href="https://www.pepperfry.com/category/mattresses.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Mattress_Mania"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/matress_mania_new_11_jan.jpg" alt="pf" width="600" height="112" style="display: block" border="0" /></a></td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/sub_head2_11_jan.jpg" alt="pf" width="600" height="91" style="display: block" border="0" /></td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top"><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/brands/kapoor-lampshades.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Kapoor_Lampshades" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/sub_pro_1_11_jan.jpg" alt="pf" width="216" height="266" style="display: block" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/brands/tu-casa.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Tu_Casa" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/sub_pro_2_11_jan.jpg" alt="pf" width="188" height="266" style="display: block" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/brands/cortina.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Cortina" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/sub_pro_3_11_jan.jpg" alt="pf" width="195" height="266" style="display: block" border="0" /></a></td>
                                              </tr>
                                            </tbody>
                                          </table></td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top"><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/brands/nestroots.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Nest_Roots" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/sub_pro_4_11_jan.jpg" alt="pf" width="216" height="266" style="display: block" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/brands/hosta-homes.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Hosta_Homes" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/sub_pro_5_11_jan.jpg" alt="pf" width="188" height="266" style="display: block" border="0" /></a></td>
                                                   <td align="left" valign="top"><a href="https://www.pepperfry.com/brands/at-home.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=@_home" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/sub_pro_6_11_jan.jpg" alt="pf" width="195" height="266" style="display: block" border="0" /></a></td>
                                              </tr>
                                            </tbody>
                                          </table></td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top"><a style="text-decoration: none" href="https://www.pepperfry.com/stores/locator.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=Studios" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/VisitStudio_11_jan.jpg" alt="pf" width="600" height="210" style="display: block" border="0" /></a></td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top"><a style="text-decoration: none" href="tel:022-6116-7373" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/BuyOnPhone_11_jan.jpg" alt="pf" width="600" height="133" style="display: block" border="0" /></a></td>
                                      </tr>
                                    </tbody>
                                  </table></td>
                              </tr>
                              <tr>
                                <td align="left" valign="top"><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                    <tbody>
                                      <tr>
                                        <td align="left" valign="top"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/FOOTER_1_2X_05APRIL.jpg" alt="explore All Categories" width="601" height="58" style="display: block" title="explore All Categories" /></td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top"><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/category/furniture.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=furniture" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/FOOTER_2_2X_05APRIL.jpg" width="76" height="126" alt="Furniture" style="display: block" title="Furniture" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/category/mattresses.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=mattress" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/FOOTER_3_2X_05APRIL.jpg" width="72" height="126" alt="Decor" style="display: block" title="Decor" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/category/home-decor.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=home_décor" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/FOOTER_4_2X_05APRIL.jpg" width="76" height="126" alt="Lamps & Lighting" style="display: block" title="Lamps & Lighting" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/category/furnishings.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=furnishings" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/FOOTER_5_2X_05APRIL.jpg" width="76" height="126" alt="Dining" style="display: block" title="Dining" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/category/kitchen-and-dining.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=kitchen_and_dining" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/FOOTER_6_2X_05APRIL.jpg" width="76" height="125" alt="Furnishing" style="display: block" title="Furnishing" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/category/lamps-and-lighting.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=lamps_lighting" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/FOOTER_7_2X_05APRIL.jpg" width="73" height="126" alt="Beds & Mattresses" style="display: block" title="Beds & Mattresses" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/category/home-utility.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=home_utiliy" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/FOOTER_8_2X_05APRIL.jpg" width="70" height="126" alt="Appliances" style="display: block" title="Appliances" border="0" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/category/appliances.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=appliances" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/FOOTER_9_2X_05APRIL.jpg" width="81" height="126" alt="Appliances" style="display: block" title="Appliances" border="0" /></a></td>
                                              </tr>
                                            </tbody>
                                          </table></td>
                                      </tr>
                                    </tbody>
                                  </table></td>
                              </tr>
                              <tr>
                                <td align="left" valign="top"><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                    <tbody>
                                      <tr>
                                        <td align="left" valign="top" width="574" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/F-P9_1503.jpg" alt="pf" width="600" height="32" style="display: block" title="pf" /></td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top" width="574" ><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                            <tbody>
                                              <tr>
                                                <td><a href="https://apps.apple.com/in/app/pepperfry/id972047429?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=app_store" style=" text-decoration: none; " ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/Footer_3_2x_04Jan.jpg" alt="pf" width="294" height="56" style="display: block" /></a></td>
                                                <td><a href="https://play.google.com/store/apps/details?id=com.app.pepperfry&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=play_store" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/Footer_4_2x_04Jan.jpg" alt="pf" width="306" height="56" style="display: block" /></a></td>
                                              </tr>
                                            </tbody>
                                          </table></td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="top" bgcolor="#FFFFFF" ><table width="600" border="0" cellspacing="0" cellpadding="0" >
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="top"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/Footer_5_2x_04Jan.jpg" alt="pf" width="118" height="48" style="display: block" /></td>
                                                <td align="left" valign="top"><a href="https://www.facebook.com/Pepperfry?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=facebook" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/Footer_6_2x_04Jan.jpg" alt="pf" width="16" height="47" style="display: block" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.instagram.com/pepperfry_official/?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=instagram" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/Footer_7_2x_04Jan.jpg" alt="pf" width="19" height="47" style="display: block" /></a></td>
                                                <td align="left" valign="top"><a href="https://in.pinterest.com/pepperfry/?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=pinterest" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/Footer_8_2x_04Jan.jpg" alt="pf" width="15" height="47" style="display: block" /></a></td>
                                                <td align="left" valign="top"><a href="https://twitter.com/Pepperfry?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=twitter" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/twitter_Newlogo_2023_V1.jpg" alt="pf" width="20" height="47" style="display: block" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.youtube.com/user/Pepperfrytv?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=youtube" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/Footer_10_2x_04Jan.jpg" alt="pf" width="23" height="47" style="display: block" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.linkedin.com/company/pepperfry/?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=linkdin" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/Footer_11_2x_04Jan.jpg" alt="pf" width="23" height="47" style="display: block" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/customer/needhelp/contactus?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=contact_us" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/Footer_12_2x_04Jan.jpg" alt="Are you reading this in Gmail?" width="145" height="47" style="display: block" /></a></td>
                                                <td align="left" valign="top"><a href="https://www.pepperfry.com/tnc/privacy-policy.html?&utm_source=webengage&utm_medium=internal_emailer&utm_campaign=mail_RegNB_15plus_deal_110124&utm_content=policy" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/Footer_13_2x_04Jan.jpg" alt="Are you reading this in Gmail?" width="125" height="47" style="display: block" /></a></td>
                                                <td align="left" valign="top"><a href="we_wk_unsubscribe_link" ><img src="https://im1.pepperfry.com/media/wysiwyg/banners/Footer_14_2x_04Jan.jpg" alt="Are you reading this in Gmail?" width="98" height="47" style="display: block" /></a></td>
                                              </tr>
                                            </tbody>
                                          </table></td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="middle"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/bg_sp_mailer_28_oct-100.jpg" alt="pf" width="600" height="10" style="display: block" /></td>
                                      </tr>
                                    </tbody>
                                  </table></td>
                              </tr>
                              <tr></tr>
                              <tr>
                                <td align="center" valign="middle"><img src="https://im1.pepperfry.com/media/wysiwyg/banners/bg_sp_mailer_28_oct-100.jpg" alt="pf" width="600" height="10" style="display: block" /></td>
                              </tr>
                            </tbody>
                          </table></td>
                      </tr>
                    </tbody>
                  </table></td>
              </tr>
            </tbody>
          </table></td>
      </tr>
    </tbody>
  </table>
  </body>
  </html>
  
  
  
  
  

  `;

  function downloads() {
    const pageHTML = document.querySelector(".preview-container").outerHTML;
    const blob = new Blob([pageHTML], { type: "text/html" });
    const url = URL.createObjectUrl(blob);
    const tempEl = document.createElement("a");
    document.body.appendChild(tempEl);
    tempEl.href = url;
    tempEl.download = "thispage.html";
    tempEl.click();
    setTimeout(() => {
      URL.revokeObjectUrl(url);
      tempEl.parentNode.removeChild(tempEl);
    }, 2000);
  }

  return (
    <div>
      <div
        className="preview-container"
        dangerouslySetInnerHTML={{ __html: datas }}
      ></div>

      <button>donload</button>
    </div>
  );
};

export default htmlFile;
