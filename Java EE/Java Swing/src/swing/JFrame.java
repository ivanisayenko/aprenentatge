package swing;

/**
 *
 * @author ivani
 */
public class JFrame extends javax.swing.JFrame {

    private static JFrame jframe = new JFrame();
    private static enviarCorreo enviarCorreo = new enviarCorreo();

    public JFrame() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jInternalFrame1 = new javax.swing.JInternalFrame();
        info = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        programa = new javax.swing.JButton();
        cont = new javax.swing.JLabel();
        enviar = new javax.swing.JButton();
        program = new javax.swing.JLabel();
        fer = new javax.swing.JLabel();
        creador = new javax.swing.JLabel();

        jInternalFrame1.setVisible(true);

        javax.swing.GroupLayout jInternalFrame1Layout = new javax.swing.GroupLayout(jInternalFrame1.getContentPane());
        jInternalFrame1.getContentPane().setLayout(jInternalFrame1Layout);
        jInternalFrame1Layout.setHorizontalGroup(
            jInternalFrame1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );
        jInternalFrame1Layout.setVerticalGroup(
            jInternalFrame1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        info.setFont(new java.awt.Font("Times New Roman", 0, 18)); // NOI18N
        info.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        info.setToolTipText("");
        info.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        info.setDebugGraphicsOptions(javax.swing.DebugGraphics.NONE_OPTION);
        info.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);

        jLabel2.setText("Aquesta es una aplicació amb interfícies gràfica");

        programa.setText("Info");
        programa.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                programaActionPerformed(evt);
            }
        });

        enviar.setText("Enviar Correo");
        enviar.setActionCommand("Enviar Un Correo");
        enviar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                enviarActionPerformed(evt);
            }
        });

        program.setFont(new java.awt.Font("Times New Roman", 0, 18)); // NOI18N
        program.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        program.setToolTipText("");
        program.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        program.setDebugGraphicsOptions(javax.swing.DebugGraphics.NONE_OPTION);
        program.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);

        fer.setFont(new java.awt.Font("Times New Roman", 0, 18)); // NOI18N
        fer.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        fer.setToolTipText("");
        fer.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        fer.setDebugGraphicsOptions(javax.swing.DebugGraphics.NONE_OPTION);
        fer.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);

        creador.setFont(new java.awt.Font("Times New Roman", 0, 18)); // NOI18N
        creador.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        creador.setText("Benvingut/da al programa");
        creador.setToolTipText("");
        creador.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        creador.setDebugGraphicsOptions(javax.swing.DebugGraphics.NONE_OPTION);
        creador.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(44, 44, 44)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jLabel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addGap(60, 60, 60))
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(cont)
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(programa)
                                .addGap(18, 18, 18)
                                .addComponent(enviar))
                            .addComponent(info, javax.swing.GroupLayout.PREFERRED_SIZE, 457, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(19, 33, Short.MAX_VALUE))
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(creador, javax.swing.GroupLayout.PREFERRED_SIZE, 457, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(fer, javax.swing.GroupLayout.PREFERRED_SIZE, 457, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(program, javax.swing.GroupLayout.PREFERRED_SIZE, 457, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(0, 0, Short.MAX_VALUE))))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGap(58, 58, 58)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(programa)
                    .addComponent(enviar))
                .addGap(18, 18, 18)
                .addComponent(info, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(creador, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(8, 8, 8)
                .addComponent(program, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(fer, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 44, Short.MAX_VALUE)
                .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 41, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(cont)
                .addGap(13, 13, 13))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void programaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_programaActionPerformed
        // TODO add your handling code here:
        info.setText("Programa creada amb ajuda de Java Swing\n");
        creador.setText("Creador: Ivan Isayenko");
        program.setText("Programa fet per desenvolpament personal");
        fer.setText("De moment podras realitzar l'opcio d'enviar correos");
    }//GEN-LAST:event_programaActionPerformed

    private void enviarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_enviarActionPerformed
        // TODO add your handling code here:
        enviarCorreo.setVisible(true);
        enviarCorreo.setLocationRelativeTo(null);
    }//GEN-LAST:event_enviarActionPerformed

    public static void main(String args[]) {
        jframe.setLocationRelativeTo(null);
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(JFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(JFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(JFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(JFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                jframe.setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel cont;
    private static javax.swing.JLabel creador;
    private javax.swing.JButton enviar;
    private static javax.swing.JLabel fer;
    private static javax.swing.JLabel info;
    private javax.swing.JInternalFrame jInternalFrame1;
    private javax.swing.JLabel jLabel2;
    private static javax.swing.JLabel program;
    private javax.swing.JButton programa;
    // End of variables declaration//GEN-END:variables
}
