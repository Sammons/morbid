
// this is a generated file.

export const Def = {
  schemas: {
    media: {
      name: 'media' as 'media',
      tables: {
        media_participant: {
          name: 'media_participant' as 'media_participant',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        media_subscription: {
          name: 'media_subscription' as 'media_subscription',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            media_participant_id: {
              name: 'media_participant_id' as 'media_participant_id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            media_channel: {
              name: 'media_channel' as 'media_channel',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        media_channel: {
          name: 'media_channel' as 'media_channel',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            kind: {
              name: 'kind' as 'kind',
              type: 'text' as 'text',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        media_correspondence: {
          name: 'media_correspondence' as 'media_correspondence',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            media_channel_id: {
              name: 'media_channel_id' as 'media_channel_id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
      },
      views: {
      },
    },
    accounting: {
      name: 'accounting' as 'accounting',
      tables: {
        account_contact: {
          name: 'account_contact' as 'account_contact',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            contact_id: {
              name: 'contact_id' as 'contact_id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            account_id: {
              name: 'account_id' as 'account_id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        account: {
          name: 'account' as 'account',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            label: {
              name: 'label' as 'label',
              type: 'text' as 'text',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        account_event: {
          name: 'account_event' as 'account_event',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            account_id: {
              name: 'account_id' as 'account_id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            kind: {
              name: 'kind' as 'kind',
              type: 'text' as 'text',
              nullable: 'T' as 'T',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        contact: {
          name: 'contact' as 'contact',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            email: {
              name: 'email' as 'email',
              type: 'text' as 'text',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        invoice: {
          name: 'invoice' as 'invoice',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            created_by: {
              name: 'created_by' as 'created_by',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            recipient: {
              name: 'recipient' as 'recipient',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
      },
      views: {
      },
    },
    sys: {
      name: 'sys' as 'sys',
      tables: {
        system_events: {
          name: 'system_events' as 'system_events',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'integer' as 'integer',
              nullable: 'F' as 'F',
            },
            kind: {
              name: 'kind' as 'kind',
              type: 'text' as 'text',
              nullable: 'F' as 'F',
            },
            moment: {
              name: 'moment' as 'moment',
              type: 'timestamp with time zone' as 'timestamp with time zone',
              nullable: 'T' as 'T',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
      },
      views: {
      },
    },
    tenant: {
      name: 'tenant' as 'tenant',
      tables: {
        credential: {
          name: 'credential' as 'credential',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            kind: {
              name: 'kind' as 'kind',
              type: 'text' as 'text',
              nullable: 'F' as 'F',
            },
            id_for_credential_kind: {
              name: 'id_for_credential_kind' as 'id_for_credential_kind',
              type: 'text' as 'text',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        member: {
          name: 'member' as 'member',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            organization_id: {
              name: 'organization_id' as 'organization_id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        possible_role: {
          name: 'possible_role' as 'possible_role',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            organization_id: {
              name: 'organization_id' as 'organization_id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        assigned_role: {
          name: 'assigned_role' as 'assigned_role',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            role_id: {
              name: 'role_id' as 'role_id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        subscription_template: {
          name: 'subscription_template' as 'subscription_template',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            label: {
              name: 'label' as 'label',
              type: 'text' as 'text',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        organization: {
          name: 'organization' as 'organization',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            label: {
              name: 'label' as 'label',
              type: 'text' as 'text',
              nullable: 'F' as 'F',
            },
            data: {
              name: 'data' as 'data',
              type: 'jsonb' as 'jsonb',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
        applied_subscription: {
          name: 'applied_subscription' as 'applied_subscription',
          columns: {
            id: {
              name: 'id' as 'id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            subscription_id: {
              name: 'subscription_id' as 'subscription_id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
            organization_id: {
              name: 'organization_id' as 'organization_id',
              type: 'uuid' as 'uuid',
              nullable: 'F' as 'F',
            },
          },
          indices: {
          },
        },
      },
      views: {
      },
    },
  },
};
