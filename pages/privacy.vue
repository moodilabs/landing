<template>
  <div>
    <AppHeader />
  <div class="privacy-page">
    <div class="container">
      <a href="/" class="back-link">{{ c.back }}</a>

      <h1>{{ c.title }}</h1>
      <p class="updated">{{ c.updated }}</p>
      <p class="intro">{{ c.intro }}</p>

      <section v-for="section in c.sections" :key="section.title">
        <h2>{{ section.title }}</h2>
        <p v-for="(p, i) in section.paragraphs" :key="i" v-html="p" />
        <ul v-if="section.items">
          <li v-for="(item, i) in section.items" :key="i" v-html="item" />
        </ul>
        <table v-if="section.table">
          <thead>
            <tr><th v-for="h in section.table.headers" :key="h">{{ h }}</th></tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in section.table.rows" :key="i">
              <td v-for="(cell, j) in row" :key="j">{{ cell }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
  <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const content: Record<string, any> = {
  en: {
    back: '← Back to MOODI',
    title: 'Privacy Policy',
    updated: 'Effective date: June 18, 2026',
    intro: 'MOODI ("Company") establishes and discloses this Privacy Policy in accordance with Article 30 of the Personal Information Protection Act to protect the personal information of users and to handle related grievances promptly.',
    sections: [
      {
        title: 'Article 1 — Purpose of Processing Personal Information',
        paragraphs: ['The Company processes personal information for the following purposes only and will not use it beyond these purposes without separate consent.'],
        items: ['Sending launch notifications to waitlist members', 'Understanding geographic distribution to improve the service'],
      },
      {
        title: 'Article 2 — Personal Information Collected',
        paragraphs: ['The following personal information is collected:'],
        table: {
          headers: ['Item', 'Collection Method', 'Purpose'],
          rows: [
            ['Email address (required)', 'Waitlist form input', 'Launch notification'],
            ['Country (auto-collected)', 'Inferred from IP address', 'Service improvement & analytics'],
          ],
        },
      },
      {
        title: 'Article 3 — Retention Period',
        paragraphs: ['Personal information is retained only for the period necessary to fulfill the stated purpose.'],
        items: ['Waitlist data: Until launch notification is sent (max 90 days after launch)', 'Deleted immediately upon request from the user'],
      },
      {
        title: 'Article 4 — Third-Party Disclosure',
        paragraphs: ['The Company does not provide personal information to third parties without the user\'s consent, except as required by law.'],
      },
      {
        title: 'Article 5 — Data Processing Delegation',
        paragraphs: ['The Company delegates data processing as follows:'],
        table: {
          headers: ['Delegate', 'Delegated Tasks'],
          rows: [
            ['Supabase Inc.', 'Database storage and management'],
            ['Vercel Inc.', 'Server hosting and infrastructure'],
          ],
        },
      },
      {
        title: 'Article 6 — Rights of Data Subjects',
        paragraphs: ['Users may exercise the following rights at any time:', 'To make a request, email <a href="mailto:kimdonghwan913@gmail.com">kimdonghwan913@gmail.com</a>. We will respond within 10 business days.'],
        items: ['Right to access personal information', 'Right to correct or delete personal information', 'Right to suspend processing'],
      },
      {
        title: 'Article 7 — Security Measures',
        paragraphs: ['The Company takes the following measures to ensure data security:'],
        items: ['Access to personal information is restricted to authorized personnel only', 'Personal information is transmitted via SSL/TLS encryption', 'Security configurations are applied to prevent unauthorized access'],
      },
      {
        title: 'Article 8 — Privacy Officer',
        paragraphs: ['For inquiries regarding personal information, please contact us:'],
        items: ['Email: <a href="mailto:kimdonghwan913@gmail.com">kimdonghwan913@gmail.com</a>'],
      },
      {
        title: 'Article 9 — Changes to This Policy',
        paragraphs: ['This policy is effective from June 18, 2026. Any changes will be announced on moodi.kr and, for significant changes, notified via email to waitlist members.'],
      },
    ],
  },
  zh: {
    back: '← 返回 MOODI',
    title: '隐私政策',
    updated: '生效日期：2026年6月18日',
    intro: 'MOODI（以下简称"公司"）依据《个人信息保护法》第30条，制定并公开本隐私政策，以保护用户个人信息并及时处理相关问题。',
    sections: [
      {
        title: '第一条 — 个人信息处理目的',
        paragraphs: ['公司仅出于以下目的处理个人信息，未经另行同意不得超出此范围使用。'],
        items: ['向候补名单成员发送服务上线通知', '了解用户地域分布以改善服务'],
      },
      {
        title: '第二条 — 收集的个人信息项目',
        paragraphs: ['公司收集以下个人信息：'],
        table: {
          headers: ['项目', '收集方式', '目的'],
          rows: [
            ['电子邮件地址（必填）', '候补名单表单填写', '发送上线通知'],
            ['所在国家（自动收集）', '基于IP地址推断', '服务改善与统计'],
          ],
        },
      },
      {
        title: '第三条 — 保留期限',
        paragraphs: ['个人信息仅在实现上述目的所需的期限内保留。'],
        items: ['候补名单信息：至发送上线通知为止（最长为上线后90天）', '用户提出删除请求时，立即予以删除'],
      },
      {
        title: '第四条 — 个人信息的第三方提供',
        paragraphs: ['公司未经用户同意，不向第三方提供个人信息，法律另有规定的除外。'],
      },
      {
        title: '第五条 — 个人信息处理委托',
        paragraphs: ['公司将个人信息处理业务委托如下：'],
        table: {
          headers: ['受托方', '委托业务'],
          rows: [
            ['Supabase Inc.', '数据库存储与管理'],
            ['Vercel Inc.', '服务器托管与基础设施运营'],
          ],
        },
      },
      {
        title: '第六条 — 用户权利',
        paragraphs: ['用户可随时行使以下权利：', '请发送邮件至 <a href="mailto:kimdonghwan913@gmail.com">kimdonghwan913@gmail.com</a> 提出申请，我们将在10个工作日内处理。'],
        items: ['查阅个人信息', '更正或删除个人信息', '要求停止处理'],
      },
      {
        title: '第七条 — 安全保障措施',
        paragraphs: ['公司采取以下措施确保个人信息安全：'],
        items: ['个人信息访问权限仅限于授权人员', '通过SSL/TLS加密传输个人信息', '应用安全配置防止未经授权的访问'],
      },
      {
        title: '第八条 — 个人信息保护负责人',
        paragraphs: ['如有个人信息相关问题，请联系：'],
        items: ['邮箱：<a href="mailto:kimdonghwan913@gmail.com">kimdonghwan913@gmail.com</a>'],
      },
      {
        title: '第九条 — 政策变更',
        paragraphs: ['本政策自2026年6月18日起生效。如有变更，将在moodi.kr上公告，重要变更将通过电子邮件通知候补名单成员。'],
      },
    ],
  },
  ja: {
    back: '← MOODIに戻る',
    title: 'プライバシーポリシー',
    updated: '施行日：2026年6月18日',
    intro: 'MOODI（以下「会社」）は、個人情報保護法第30条に基づき、ユーザーの個人情報を保護し、関連する苦情を迅速に処理するため、以下のプライバシーポリシーを策定・公開します。',
    sections: [
      {
        title: '第1条 — 個人情報の処理目的',
        paragraphs: ['会社は以下の目的のみで個人情報を処理し、別途同意なく目的外での使用は行いません。'],
        items: ['ウェイトリスト登録者へのサービスリリース通知の送信', 'サービス改善のためのユーザー地域分布の把握'],
      },
      {
        title: '第2条 — 収集する個人情報の項目',
        paragraphs: ['以下の個人情報を収集しています：'],
        table: {
          headers: ['項目', '収集方法', '目的'],
          rows: [
            ['メールアドレス（必須）', 'ウェイトリストフォーム入力', 'リリース通知の送信'],
            ['アクセス国（自動収集）', 'IPアドレスに基づく推定', 'サービス改善・統計'],
          ],
        },
      },
      {
        title: '第3条 — 保有期間',
        paragraphs: ['個人情報は目的達成に必要な期間のみ保有します。'],
        items: ['ウェイトリスト情報：リリース通知送信まで（最長リリース後90日）', 'ユーザーから削除要請があった場合は速やかに削除'],
      },
      {
        title: '第4条 — 第三者への提供',
        paragraphs: ['会社はユーザーの同意なく個人情報を第三者に提供しません（法令に基づく場合を除く）。'],
      },
      {
        title: '第5条 — 個人情報処理の委託',
        paragraphs: ['会社は以下の通り個人情報処理業務を委託しています：'],
        table: {
          headers: ['委託先', '委託業務'],
          rows: [
            ['Supabase Inc.', 'データベースの保存・管理'],
            ['Vercel Inc.', 'サーバーホスティング・インフラ運営'],
          ],
        },
      },
      {
        title: '第6条 — 情報主体の権利',
        paragraphs: ['ユーザーはいつでも以下の権利を行使できます：', '<a href="mailto:kimdonghwan913@gmail.com">kimdonghwan913@gmail.com</a> までメールにてご連絡ください。10営業日以内に対応いたします。'],
        items: ['個人情報の閲覧請求', '個人情報の訂正・削除請求', '個人情報処理の停止請求'],
      },
      {
        title: '第7条 — 安全性確保の措置',
        paragraphs: ['会社は個人情報の安全性確保のため以下の措置を講じています：'],
        items: ['個人情報へのアクセスは担当者のみに制限', 'SSL/TLS暗号化通信による個人情報の送受信', '不正アクセス防止のためのセキュリティ設定'],
      },
      {
        title: '第8条 — 個人情報保護責任者',
        paragraphs: ['個人情報に関するお問い合わせは以下までご連絡ください：'],
        items: ['メール：<a href="mailto:kimdonghwan913@gmail.com">kimdonghwan913@gmail.com</a>'],
      },
      {
        title: '第9条 — プライバシーポリシーの変更',
        paragraphs: ['本ポリシーは2026年6月18日より施行されます。変更がある場合はmoodi.krにて告知し、重要な変更についてはウェイトリスト登録者にメールでお知らせします。'],
      },
    ],
  },
}

const c = computed(() => content[locale.value] ?? content['en'])

useHead({
  title: 'Privacy Policy — MOODI',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<style scoped>
.privacy-page {
  min-height: 100vh;
  background: #09090C;
  color: rgba(255,255,255,0.8);
  padding: 80px 0;
}

.container {
  max-width: 780px;
  margin: 0 auto;
  padding: 0 24px;
}

.back-link {
  display: inline-block;
  font-size: 14px;
  color: rgba(255,255,255,0.4);
  margin-bottom: 40px;
  transition: color 0.2s;
}
.back-link:hover { color: rgba(255,255,255,0.8); }

h1 {
  font-size: 36px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.03em;
  margin-bottom: 8px;
}

.updated {
  font-size: 13px;
  color: rgba(255,255,255,0.3);
  margin-bottom: 16px;
}

.intro {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255,255,255,0.5);
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

section {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
section:last-child { border-bottom: none; }

h2 {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 14px;
}

p {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255,255,255,0.55);
  margin-bottom: 10px;
}

ul {
  padding-left: 20px;
  margin-bottom: 12px;
}

li {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255,255,255,0.55);
  margin-bottom: 4px;
}

strong { color: rgba(255,255,255,0.8); }

:deep(a) { color: #a78bfa; }

table {
  width: 100%;
  border-collapse: collapse;
  margin: 12px 0;
  font-size: 13px;
}
th {
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.7);
  font-weight: 600;
  padding: 10px 14px;
  text-align: left;
  border: 1px solid rgba(255,255,255,0.08);
}
td {
  color: rgba(255,255,255,0.5);
  padding: 10px 14px;
  border: 1px solid rgba(255,255,255,0.08);
  line-height: 1.6;
}
</style>
