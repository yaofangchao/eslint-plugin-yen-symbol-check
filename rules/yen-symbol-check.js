/**
 * @fileoverview 日元符号检测
 * @author yfc
 */
 "use strict";

 //------------------------------------------------------------------------------
 // Rule Definition
 //------------------------------------------------------------------------------
 
 /**
  * @type {import('eslint').Rule.RuleModule}
  */
  
  const yenSymbol = '¥'
  
  const reportMsgByNode = function(node, context){
    if((node.type === 'VText' || node.type === 'Literal') && typeof(node.value) === 'string' && node.value.indexOf(yenSymbol) > -1){
      context.report({
        node,
        messageId: 'avoidSymbol',
      });
    }
  }

  module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "In the Vue project, eslint prompts to verify whether the Yen symbol ¥ is used",
        category: "Fill me in",
        recommended: false
      },
      schema: [
        // fill in your schema
      ],
      messages: {
        avoidSymbol: "Yen symbol ¥ can't be used in this project",
      },
    },
  
    create: function(context) {
    
      return context.parserServices.defineTemplateBodyVisitor(
        // Event handlers for <template>.
        {
          'Literal': (node)=> {
            reportMsgByNode(node, context)
          },
          'VText': (node)=>{ //模板中的值
            reportMsgByNode(node, context)
          },
        },
        // Event handlers for <script> or scripts. (optional)
        {
            'Literal': (node)=> {
              reportMsgByNode(node, context)
            }
        },
        // Options. (optional)
        {
            templateBodyTriggerSelector: "Program:exit"
        }
      )
    }
  };

 